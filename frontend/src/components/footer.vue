<template>
    <footer class="footer">
        <div class="container">
            <div class="footer-logo-container">
                <img src='@/assets/voiture_logo_footer.webp' class="footer-logo" />
            </div>
            <nav class="footer-nav">
                <p>© Mini Racers Entertainment. All Rights Reserved. Mini racers logo
                    are trademarks of Mini racers Entertainment in the FR and/or other countries.</p>
            </nav>
            <img src='@/assets/voiture_logo_footer.webp' class="footer-logo2" />
        </div>
    </footer>
</template>

<style scoped>
.footer {
    background: #050505;
    color: #fff;
    padding: 20px 0;
    text-align: center;
    opacity: 100%;
}

.container {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.footer-logo2 {
    display: flex;
    align-items: center;
    height: 80px;
}

.footer-logo {
    height: 80px;
}

.footer-nav ul {
    list-style: none;
    padding: 0;
    display: flex;
    gap: 15px;
}

.footer-nav a {
    color: #fff;
    text-decoration: none;
    transition: 0.3s;
}

.footer-nav a:hover {
    color: #f4a261;
}

.footer-social {
    display: flex;
    gap: 10px;
}

.icon {
    font-size: 1.5rem;
    color: #fff;
    text-decoration: none;
    transition: 0.3s;
}

.icon:hover {
    color: #f4a261;
}

/* Responsive */
@media (max-width: 768px) {
    .container {
        flex-direction: column;
        text-align: center;
        gap: 15px;
    }

    .footer-nav ul {
        flex-direction: column;
        gap: 10px;
    }
}
</style>
