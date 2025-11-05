function loadHeader() {
    const headerContainer = document.getElementById('header-container');

    // Detecta automaticamente a profundidade da página
    const basePath = /seasite/;

    const headerHTML = `
        <header>
            <div class="container">
                <div class="header-content">
                    <a href="${basePath}index.html" class="logo-link">
                        <img src="https://konsolanto.org/wp-content/uploads/2024/03/cropped-sea-logo-1000x500-1.jpg?w=580&h=290" 
                             alt="SEA logo" 
                             class="logo-image" 
                             style="width: 150px; height: 75px;">
                    </a>

                    <div class="header-text">
                        <h1>Spiritisma Esperanto-Asocio</h1>
                        <p><!--La lingvo de espero, paco kaj amo inter popoloj.--></p>
                    </div>

                    <div class="header-right">
                        <nav>
                            <ul class="main-menu">
                                <li><a href="${basePath}blogo/blogo.html">Blogo</a></li>
                                
                                <li class="menu-dropdown">
                                    <a href="${basePath}pt-br/pt-br.html">Em português</a>
                                    <ul class="submenu">
                                        <li><a href="">Adesão (Brasil)</a></li>
                                        <li><a href="">AO ESPÍRITA — Sobre a Língua da Fraternidade</a></li>
                                        <li><a href="">Campanha Abel Gomes</a></li>
                                        <li><a href="">Doar à SEA</a></li>
                                        <li><a href="">Estatuto da SEA</a></li>
                                        <li><a href="">Peg & Leia</a></li>
                                        <li><a href="">Recursos para aprender Esperanto</a></li>
                                        <li><a href="">Sobre a SEA</a></li>
                                    </ul>
                                </li>
                                
                                <li class="menu-dropdown">
                                    <a href="${basePath}ese/ese.html">ESE</a>
                                    <ul class="submenu">
                                        <li><a href="">Gazeto</a></li>
                                        <li><a href="">Hejma Evangelia Studo</a></li>
                                        <li><a href="">Internacia Spiritisma Kongreso 1925</a></li>
                                        <li><a href="">Ligilaro</a></li>
                                        <li><a href="">Monda Spiritisma Junulara Studgrupo</a></li>
                                        <li><a href="">Spiritisma Kodigo</a></li>
                                    </ul>
                                </li>
                                
                                <li class="menu-dropdown">
                                    <a href="${basePath}sea/sea.html">SEA</a>
                                    <ul class="submenu">
                                        <li><a href="">Aliĝilo (ekster Brazilo)</a></li>
                                        <li><a href="">Bonvenon en nia komunumo</a></li>

                                        <li class="menu-dropdown">
                                            <a href="">Kleriga Servo</a>
                                            <ul class="submenu-level-2">

                                                <li class="menu-dropdown">
                                                    <a href="">Audaĵoj</a>
                                                    <ul class="submenu-level-3">
                                                        <li><a href="">Feliĉaj la Simplaj</a></li>
                                                        <li><a href="">Gazeto de BAES 1</a></li>
                                                        <li><a href="">Konsolanto 3</a></li>
                                                    </ul>
                                                </li>

                                                <li><a href="">Babiloj pri tradukarto</a></li>
                                                <li><a href="">Gramatikejo</a></li>

                                                <li class="menu-dropdown">
                                                    <a href="">Historiaj dokumentoj</a>
                                                    <ul class="submenu-level-3">
                                                        <li><a href="">Eldonaĵoj</a></li>
                                                        <li><a href="">Gazetaj eltranĉaĵoj</a></li>
                                                        <li><a href="">Gazetoj</a></li>
                                                        <li><a href="">Periodaĵoj</a></li>
                                                    </ul>
                                                </li>
                                                
                                                <li><a href="">Konatiĝu kun Spiritismo</a></li>

                                                <li class="menu-dropdown">
                                                    <a href="">Konsolanto</a>
                                                    <ul class="submenu-level-3">
                                                        <li><a href="">1a numero</a></li>
                                                        <li><a href="">2a numero + suplementoj</a></li>
                                                        <li><a href="">3a numero</a></li>
                                                    </ul>
                                                </li>

                                                <li><a href="">Lingvaj Provokoj – PSV</a></li>

                                                <li class="menu-dropdown">
                                                    <a href="">Muzika dosierujo</a>
                                                    <ul class="submenu-level-3">
                                                        <li><a href="">Kantaro | Versio 1.2</a></li>
                                                        <li><a href="">Pliaj kantoj</a></li>
                                                    </ul>
                                                </li>

                                                <li><a href="">Poeziumado</a></li>
                                                <li><a href="">Pri redaktado</a></li>
                                                <li><a href="">Progresiga angulo</a></li>
                                                <li><a href="">Reklamiloj</a></li>

                                                <li class="menu-dropdown">
                                                    <a href="">Spiritaj Mesaĝoj</a>
                                                    <ul class="submenu-level-3">
                                                        <li><a href="">Gvidiloj por aktivuloj</a></li>
                                                    </ul>
                                                </li>
                                                
                                                <li class="menu-dropdown">
                                                    <a href="">Tradukarto</a>
                                                    <ul class="submenu-level-3">
                                                        <li><a href="">Artikoloj</a></li>
                                                        <li><a href="">Eldonaĵoj</a></li>
                                                        <li><a href="">Eltiraĵoj el Brazila Esperantisto</a></li>
                                                        <li><a href="">Eseoj</a></li>
                                                        <li><a href="">Konsideroj kaj konsiloj</a></li>
                                                        <li><a href="">Mesaĝoj el la spirita mondo</a></li>
                                                        <li><a href="">Publikaĵoj</a></li>
                                                        <li><a href="">Universitataj studaĵoj</a></li>
                                                    </ul>
                                                </li>

                                                <li><a href="">Vi, redaktoro</a></li>
                                                <li><a href="">Virtuala Muzeo</a></li>
                                            </ul>
                                        </li>

                                        <li><a href="">Pri SEA</a></li>
                                        <li><a href="">Retkanaloj de SEA</a></li>
                                    </ul>
                                </li>
                                
                                <li class="menu-dropdown">
                                    <a href="${basePath}ser/ser.html">SER</a>
                                    <ul class="submenu">
                                        <li><a href="">2006 | 1a BRES</a></li>
                                        <li><a href="">2007 | 2a BRES</a></li>
                                        <li><a href="">2008 | 3a BRES</a></li>
                                        <li><a href="">2009 | 4a BRES</a></li>
                                        <li><a href="">2011 | 5a BRES</a></li>
                                        <li><a href="">2012 | 6a BRES</a></li>
                                        <li><a href="">2014 | 7a BRES</a></li>
                                        <li><a href="">2015 | 8a BRES</a></li>
                                        <li><a href="">2016 | 9a BRES</a></li>
                                        <li><a href="">2019 | 10a BRES</a></li>
                                        <li><a href="">2021 | 11a BRES</a></li>
                                        <li><a href="">2022 | 12a BRES</a></li>
                                        <li><a href="">2023 | 13a BRES</a></li>
                                        <li><a href="">2024 | 14a BRES</a></li>
                                        <li><a href="">2025 | 15a BRES</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>

                        <div class="search-container">
                            <button class="search-btn" onclick="toggleSearch()">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <path d="m21 21-4.3-4.3"></path>
                                </svg>
                            </button>
                            <div class="search-box" id="searchBox">
                                <input type="text" placeholder="Serĉi..." id="searchInput">
                                <button class="search-submit" onclick="performSearch()">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <circle cx="11" cy="11" r="8"></circle>
                                        <path d="m21 21-4.3-4.3"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    `;
    
    headerContainer.innerHTML = headerHTML;
}

document.addEventListener('DOMContentLoaded', loadHeader);

/* -------- Modal -------- */
function abrirJanela() {
    document.getElementById('janela-modal').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

function fecharJanela() {
    document.getElementById('janela-modal').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

/* -------- Pesquisa -------- */
function toggleSearch() {
    const searchBox = document.getElementById('searchBox');
    const searchInput = document.getElementById('searchInput');
    
    searchBox.classList.toggle('active');
    if (searchBox.classList.contains('active')) searchInput.focus();
}

function performSearch() {
    const query = document.getElementById('searchInput').value.trim();
    if (query) alert("Serchante" + query);
}

/* Fechar pesquisa ao clicar fora */
document.addEventListener('click', (event) => {
    const searchBox = document.getElementById('searchBox');
    const searchBtn = document.querySelector('.search-btn');
    if (searchBox && !searchBox.contains(event.target) && !searchBtn.contains(event.target)) {
        searchBox.classList.remove('active');
    }
});

/* Atalhos de teclado */
document.addEventListener('keydown', (event) => {
    const searchBox = document.getElementById('searchBox');
    const searchInput = document.getElementById('searchInput');
    if (event.key === 'Enter' && searchBox?.classList.contains('active') && document.activeElement === searchInput)
        performSearch();
    if (event.key === 'Escape') searchBox?.classList.remove('active');
});

/* -------- Menu mobile -------- */
document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.menu-dropdown');
    
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                this.classList.toggle('active');
                dropdowns.forEach(other => {
                    if (other !== this) other.classList.remove('active');
                });
            }
        });
    });
    
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.menu-dropdown') && window.innerWidth <= 768) {
            dropdowns.forEach(dropdown => dropdown.classList.remove('active'));
        }
    });
});

