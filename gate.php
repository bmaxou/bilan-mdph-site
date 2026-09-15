Zapier semble avoir un souci temporaire de leur côté, ça peut prendre un moment à se débloquer — pas la peine d'insister maintenant, réessaie plus tard.

En attendant, pour débloquer tout de suite les 4 boutons sans attendre Zapier : ouvre ce lien → github.com/bmaxou/bilan-mdph-site/edit/main/gate.php, clique sur l'icône crayon si besoin, fais Ctrl+A dans la zone de texte, colle ce qui suit à la place, puis clique « Commit changes » (bouton vert en bas) :

```php
<?php
/**
* Cabinet Bouche & Chmura — bilan-mdph.fr
* Page de protection temporaire (phase privée, avant validation et mise en ligne publique).
*
* Pour changer le mot de passe : voir GUIDE-MISE-A-JOUR.md, section « Mot de passe du site ».
* Pour retirer complètement la protection (passage en public) : voir la procédure numérotée
* dans NOTE-DE-LIVRAISON.md, section « Passage en public ».
*/

$SALT = 'fb7557d5e7e81792';
$HASH = '9db76516e01e22072aeeed5abb83cdcd3a62bf8587abfafaf9371e79344b5931';
$TOKEN = 'c74f96e7453df185ebd571aa6990dff8bd19201fdb4d9b17';
$COOKIE_NAME = 'bmdph_gate';

$error = '';
$redirect = isset($_GET['r']) ? $_GET['r'] : '/portail.html';
if (!preg_match('#^/[a-zA-Z0-9/_\-\.]*$#', $redirect)) {
$redirect = '/portail.html';
}
// Entrer par l'adresse nue (bilan-mdph.fr) doit toujours mener au portail des 4 sites,
// pas à la page d'accueil du site Bilan MDPH — c'est l'habitude de Max.
if ($redirect === '/' || $redirect === '/index.html') {
$redirect = '/portail.html';
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
$pass = isset($_POST['password']) ? $_POST['password'] : '';
$attempt = hash('sha256', $SALT . ':' . $pass);
if (hash_equals($HASH, $attempt)) {
setcookie($COOKIE_NAME, $TOKEN, [
'expires' => time() + 60 * 60 * 24 * 30,
'path' => '/',
'secure' => true,
'httponly' => true,
'samesite' => 'Lax',
]);
header('Location: ' . $redirect);
exit;
} else {
$error = 'Mot de passe incorrect.';
}
}
?>
<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex,nofollow">
<title>Accès privé — bilan-mdph.fr</title>
<link rel="preconnect" href="https://api.fontshare.com">
<link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=fraunces@400,500,600&f[]=general-sans@400,500,600&display=swap">
<link rel="stylesheet" href="/assets/style.css">
<style>
body{display:flex;align-items:center;justify-content:center;min-height:100vh;padding:24px;}
.gate-box{max-width:420px;width:100%;background:var(--paper-raised);border:1px solid var(--border);border-radius:var(--radius,12px);padding:32px;}
.gate-box h1{font-family:var(--serif);font-size:1.4rem;margin-bottom:.5rem;}
.gate-box p{margin-bottom:1.2rem;color:var(--ink-muted);}
.gate-box input[type=password]{width:100%;padding:.7rem .9rem;border-radius:8px;border:1px solid var(--border);margin-bottom:1rem;font-size:1rem;font-family:var(--sans);box-sizing:border-box;}
.gate-error{color:var(--signal);margin-bottom:1rem;font-family:var(--sans);}
.gate-box .btn{width:100%;text-align:center;cursor:pointer;}
</style>
</head>
<body>
<div class="gate-box">
<h1>Site en cours de finalisation</h1>
<p>Ce site n'est pas encore public. Merci de saisir le mot de passe qui vous a été communiqué.</p>
<?php if ($error): ?><p class="gate-error"><?php echo htmlspecialchars($error); ?></p><?php endif; ?>
<form method="post" action="/gate.php?r=<?php echo htmlspecialchars($redirect); ?>">
<input type="password" name="password" autofocus placeholder="Mot de passe">
<button class="btn" type="submit">Accéder au site</button>
</form>
</div>
</body>
</html>
```
