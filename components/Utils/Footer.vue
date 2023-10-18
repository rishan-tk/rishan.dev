<template>
    <footer>
        <div class="container flex">
            <div id="footer-logo" class="container">
                <NuxtImg src="/img/rishandev-logos_black.png" alt="Footer Image"/>
            </div> <!-- First Section for Logo-->
            <div id="footer-links" class="container">
                <h2 class="text-center py-3">Useful Links</h2>
                <ul class="text-center">
                    <li><a href="https://www.linkedin.com/in/rishan-thirukumar/" class=""><i class="fa-brands fa-linkedin-in"></i><span>Linked In</span></a></li>
                    <li><a href="https://github.com/rishan-tk/" class=""><i class="fa-brands fa-github"></i><span>GitHub</span></a></li>
                </ul>
            </div><!-- Second Section for Links-->
        </div>
        <div class="container copyright">
            <p>All rights reserved by @ Rishan Thirukumar 2023</p>
        </div>
    </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>
