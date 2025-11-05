// footer.js
function loadFooter() {
    const footerContainer = document.getElementById('footer-container');
    
    const footerHTML = `
        <footer>
            <div class="container">
                <div class="footer-content">
                    <div class="footer-column">
                        <h3>SEA</h3>
                        <ul>
                            <li><a href="sobre.html">Sobre nós</a></li>
                            <li><a href="missao.html">Nossa missão</a></li>
                            <li><a href="equipe.html">Equipe</a></li>
                            <li><a href="parceiros.html">Parceiros</a></li>
                        </ul>
                    </div>
                    
                    <div class="footer-column">
                        <h3>Kategorioj de la blogaĵoj</h3>
                        <ul>
                            <li><a href="#">Aplikaĵoj kaj retejoj</a></li>
                            <li><a href="#">Emmanuel</a></li>
                            <li><a href="#">Esperanto-lingvo</a></li>
                            <li><a href="#">Esperanto-movado</a></li>
                            <li><a href="#">Evangelio</a></li>
                            <li><a href="#">Eventoj</a></li>
                            <li><a href="#">Forpasoj</a></li>
                            <li><a href="#">Historio</a></li>
                            <li><a href="#">Infanaĝo</a></li>
                            <li><a href="#">Instruado</a></li>
                        </ul>
                    </div>
                    
                    <div class="footer-column">
                        <h3 style="visibility: hidden;">Kategorioj (part 2)</h3>
                        <ul>
                            <li><a href="#">Jesuo</a></li>
                            <li><a href="#">Junaĝo</a></li>
                            <li><a href="#">Kampanjojn</a></li>
                            <li><a href="#">Kino</a></li>
                            <li><a href="#">Kristanismo</a></li>
                            <li><a href="#">Literaturo</a></li>
                            <li><a href="#">Mesaĝoj</a></li>
                            <li><a href="#">Muziko</a></li>
                            <li><a href="#">Organizaĵoj</a></li>
                            <li><a href="#">Personoj</a></li>
                        </ul>
                    </div>
                    
                    <div class="footer-column">
                        <h3 style="visibility: hidden;">Kategorioj (part 3)</h3>
                        <ul>
                            <li><a href="#">Publikaĵoj</a></li>
                            <li><a href="#">Sen kategorio</a></li>
                            <li><a href="#">Spiritisma Doktrino</a></li>
                            <li><a href="#">Spiritisma Movado</a></li>
                            <li><a href="#">Studoj</a></li>
                        </ul>
                    </div>
                    
                    <div class="footer-column">
                        <h3>Nossas redes sociais</h3>
                        <div class="social-links">
                            <a href="https://web.facebook.com/konsolanto?_rdc=1&_rdr" class="social-link">
                                <svg width="40" height="40" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                                    <path d="M12 2C6.5 2 2 6.5 2 12c0 5 3.7 9.1 8.4 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7C18.3 21.1 22 17 22 12c0-5.5-4.5-10-10-10z"></path>
                                </svg>
                            </a>
                            <a href="https://www.instagram.com/konsolanto" class="social-link">
                                <svg width="40" height="40" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                                    <defs>
                                        <linearGradient id="instagram-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" style="stop-color:#fdf497;stop-opacity:1" />
                                            <stop offset="5%" style="stop-color:#fdf497;stop-opacity:1" />
                                            <stop offset="45%" style="stop-color:#fd5949;stop-opacity:1" />
                                            <stop offset="60%" style="stop-color:#d6249f;stop-opacity:1" />
                                            <stop offset="100%" style="stop-color:#285AEB;stop-opacity:1" />
                                        </linearGradient>
                                    </defs>
                                    <path d="M12,4.622c2.403,0,2.688,0.009,3.637,0.052c0.877,0.04,1.354,0.187,1.671,0.31c0.42,0.163,0.72,0.358,1.035,0.673 c0.315,0.315,0.51,0.615,0.673,1.035c0.123,0.317,0.27,0.794,0.31,1.671c0.043,0.949,0.052,1.234,0.052,3.637 s-0.009,2.688-0.052,3.637c-0.04,0.877-0.187,1.354-0.31,1.671c-0.163,0.42-0.358,0.72-0.673,1.035 c-0.315,0.315-0.615,0.51-1.035,0.673c-0.317,0.123-0.794,0.27-1.671,0.31c-0.949,0.043-1.233,0.052-3.637,0.052 s-2.688-0.009-3.637-0.052c-0.877-0.04-1.354-0.187-1.671-0.31c-0.42-0.163-0.72-0.358-1.035-0.673 c-0.315-0.315-0.51-0.615-0.673-1.035c-0.123-0.317-0.27-0.794-0.31-1.671C4.631,14.688,4.622,14.403,4.622,12 s0.009-2.688,0.052-3.637c0.04-0.877,0.187-1.354,0.31-1.671c0.163-0.42,0.358-0.72,0.673-1.035 c0.315-0.315,0.615-0.51,1.035-0.673c0.317-0.123,0.794-0.27,1.671-0.31C9.312,4.631,9.597,4.622,12,4.622 M12,3 C9.556,3,9.249,3.01,8.289,3.054C7.331,3.098,6.677,3.25,6.105,3.472C5.513,3.702,5.011,4.01,4.511,4.511 c-0.5,0.5-0.808,1.002-1.038,1.594C3.25,6.677,3.098,7.331,3.054,8.289C3.01,9.249,3,9.556,3,12c0,2.444,0.01,2.751,0.054,3.711 c0.044,0.958,0.196,1.612,0.418,2.185c0.23,0.592,0.538,1.094,1.038,1.594c0.5,0.5,1.002,0.808,1.594,1.038 c0.572,0.222,1.227,0.375,2.185,0.418C9.249,20.99,9.556,21,12,21s2.751-0.01,3.711-0.054c0.958-0.044,1.612-0.196,2.185-0.418 c0.592-0.23,1.094-0.538,1.594-1.038c0.5-0.5,0.808-1.002,1.038-1.594c0.222-0.572,0.375-1.227,0.418-2.185 C20.99,14.751,21,14.444,21,12s-0.01-2.751-0.054-3.711c-0.044-0.958-0.196-1.612-0.418-2.185c-0.23-0.592-0.538-1.094-1.038-1.594 c-0.5-0.5-1.002-0.808-1.594-1.038c-0.572-0.222-1.227-0.375-2.185-0.418C14.751,3.01,14.444,3,12,3L12,3z M12,7.378 c-2.552,0-4.622,2.069-4.622,4.622S9.448,16.622,12,16.622s4.622-2.069,4.622-4.622S14.552,7.378,12,7.378z M12,15 c-1.657,0-3-1.343-3-3s1.343-3,3-3s3,1.343,3,3S13.657,15,12,15z M16.804,6.116c-0.596,0-1.08,0.484-1.08,1.08 s0.484,1.08,1.08,1.08c0.596,0,1.08-0.484,1.08-1.08S17.401,6.116,16.804,6.116z"></path>
                                </svg>
                            </a>
                            <a href="https://www.youtube.com/@konsolanto" class="social-link">
                                <svg width="40" height="40" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                                    <path d="M21.8,8.001c0,0-0.195-1.378-0.795-1.985c-0.76-0.797-1.613-0.801-2.004-0.847c-2.799-0.202-6.997-0.202-6.997-0.202 h-0.009c0,0-4.198,0-6.997,0.202C4.608,5.216,3.756,5.22,2.995,6.016C2.395,6.623,2.2,8.001,2.2,8.001S2,9.62,2,11.238v1.517 c0,1.618,0.2,3.237,0.2,3.237s0.195,1.378,0.795,1.985c0.761,0.797,1.76,0.771,2.205,0.855c1.6,0.153,6.8,0.201,6.8,0.201 s4.203-0.006,7.001-0.209c0.391-0.047,1.243-0.051,2.004-0.847c0.6-0.607,0.795-1.985,0.795-1.985s0.2-1.618,0.2-3.237v-1.517 C22,9.62,21.8,8.001,21.8,8.001z M9.935,14.594l-0.001-5.62l5.404,2.82L9.935,14.594z"></path>
                                </svg>
                            </a>
                            <a href="mailto:saluton@konsolanto.org" class="social-link">
                                <svg width="40" height="40" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                                    <path d="M4 8l8 5 8-5-8-5-8 5zM4 10v10h16V10l-8 5-8-5z"/>
                                </svg>
                            </a>
                            <a href="https://chat.whatsapp.com/Bn5V4CuBt9PFytecf4BW9a" class="social-link">
                                <svg width="40" height="40" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                                    <path d="M20.5,6.5C17.5,3.5,13.4,2,9.2,2C4.2,2,0.1,5.8,0.1,10.5c0,1.9,0.6,3.7,1.6,5.2L2,21l5.5-1.4c1.4,0.8,3,1.2,4.6,1.2
                                    c5,0,9.1-3.8,9.1-8.5C21.2,10.2,20.5,6.5,20.5,6.5z M9.2,18.8c-1.4,0-2.8-0.4-4-1.1l-0.3-0.2l-3,0.8l0.8-2.9l-0.2-0.3
                                    c-0.8-1.2-1.2-2.6-1.2-4.1c0-4.1,3.6-7.5,8.1-7.5c2.2,0,4.2,0.8,5.7,2.3c1.5,1.5,2.3,3.5,2.3,5.7C17.3,15.2,13.8,18.8,9.2,18.8z
                                    M14.4,12.9c-0.2-0.1-1.4-0.7-1.6-0.8c-0.2-0.1-0.4-0.1-0.5,0.1c-0.2,0.2-0.7,0.8-0.8,1c-0.1,0.2-0.3,0.2-0.5,0.1
                                    c-0.2-0.1-1-0.4-1.9-1.2c-0.7-0.6-1.2-1.4-1.3-1.6c-0.1-0.2,0-0.3,0.1-0.5c0.1-0.1,0.2-0.3,0.3-0.4c0.1-0.1,0.1-0.2,0.2-0.3
                                    c0.1-0.1,0.1-0.3,0-0.4c-0.1-0.1-0.5-1.2-0.7-1.6c-0.2-0.4-0.4-0.4-0.5-0.4c-0.1,0-0.3,0-0.4,0c-0.1,0-0.3,0-0.5,0
                                    c-0.2,0-0.4,0.1-0.6,0.3c-0.2,0.2-0.8,0.8-0.8,1.9c0,1.1,0.8,2.2,0.9,2.3c0.1,0.2,1.5,2.3,3.6,3.2c0.5,0.2,0.9,0.4,1.2,0.5
                                    c0.5,0.2,1,0.2,1.4,0.1c0.4-0.1,1.4-0.6,1.6-1.1c0.2-0.5,0.2-0.9,0.1-1C14.7,13,14.6,12.9,14.4,12.9z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="copyright">
                    <p>&copy; 2025 SEA - Todos os direitos reservados</p>
                </div>
            </div>
        </footer>
    `;
    
    footerContainer.innerHTML = footerHTML;
}

document.addEventListener('DOMContentLoaded', loadFooter);