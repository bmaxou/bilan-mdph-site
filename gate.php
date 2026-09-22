<?php
/**
* Cabinet Bouche & Chmura : bilan-mdph.fr
* Page de protection temporaire (phase privée, avant validation et mise en ligne publique).
*
* Pour changer le mot de passe : voir GUIDE-MISE-A-JOUR.md, section « Mot de passe du site ».
* Pour retirer complètement la protection (passage en public) : voir la procédure numérotée
* dans NOTE-DE-LIVRAISON.md, section « Passage en public ».
*/

$SALT = 'fb7557d5e7e81792';
$HASH_MAX = '9db76516e01e22072aeeed5abb83cdcd3a62bf8587abfafaf9371e79344b5931';
$TOKEN_MAX = 'c74f96e7453df185ebd571aa6990dff8bd19201fdb4d9b17';
// Accès restreint (ex. collaboratrice) : mot de passe distinct de celui de Max, qui ne
// donne jamais accès au portail des autres sites, même en tapant l'adresse nue ou
// /portail.html directement. Pour changer ce mot de passe : voir GUIDE-MISE-A-JOUR.md.
$HASH_GUEST = '65fe55ef91ecff9608b35ceee0f5d9919156d837ebfd07c1278db5ee34599173';
$TOKEN_GUEST = 'd479e1f46927f514ef2deecd9af37567232b56745189fc2b';
$COOKIE_NAME = 'bmdph_gate';

$error = '';
$redirect = isset($_GET['r']) ? $_GET['r'] : '/portail.html';
if (!preg_match('#^/[a-zA-Z0-9/_\-\.]*$#', $redirect)) {
$redirect = '/portail.html';
}
// Entrer par l'adresse nue (bilan-mdph.fr) doit toujours mener au portail des 4 sites,
// pas à la page d'accueil du site Bilan MDPH, c'est l'habitude de Max.
if ($redirect === '/' || $redirect === '/index.html') {
$redirect = '/portail.html';
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
$pass = isset($_POST['password']) ? $_POST['password'] : '';
$attempt = hash('sha256', $SALT . ':' . $pass);
if (hash_equals($HASH_MAX, $attempt)) {
setcookie($COOKIE_NAME, $TOKEN_MAX, [
'expires' => time() + 60 * 60 * 24 * 30,
'path' => '/',
'secure' => true,
'httponly' => true,
'samesite' => 'Lax',
]);
header('Location: ' . $redirect);
exit;
} elseif (hash_equals($HASH_GUEST, $attempt)) {
// Accès restreint : jamais le portail, même si la redirection demandée y menait.
$guest_redirect = ($redirect === '/portail.html') ? '/index.html' : $redirect;
setcookie($COOKIE_NAME, $TOKEN_GUEST, [
'expires' => time() + 60 * 60 * 24 * 30,
'path' => '/',
'secure' => true,
'httponly' => true,
'samesite' => 'Lax',
]);
header('Location: ' . $guest_redirect);
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
<title>Accès privé : bilan-mdph.fr</title>
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
