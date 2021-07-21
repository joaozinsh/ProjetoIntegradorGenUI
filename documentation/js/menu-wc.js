'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">saude-do-bem documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-b6cad333ee92ac2cc7bf30f9105ec585"' : 'data-target="#xs-components-links-module-AppModule-b6cad333ee92ac2cc7bf30f9105ec585"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-b6cad333ee92ac2cc7bf30f9105ec585"' :
                                            'id="xs-components-links-module-AppModule-b6cad333ee92ac2cc7bf30f9105ec585"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CarrinhoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CarrinhoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CarrinhoVazioComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CarrinhoVazioComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConcluirCompraComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConcluirCompraComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContatoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContatoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DoencaAdminComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DoencaAdminComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginCadastroComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginCadastroComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MedicamentosAdminComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MedicamentosAdminComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MedicamentosComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MedicamentosComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavbarLogadoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavbarLogadoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PagamentoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PagamentoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RodapeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RodapeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SobreComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SobreComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/AlertasComponent.html" data-type="entity-link" >AlertasComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Doenca.html" data-type="entity-link" >Doenca</a>
                            </li>
                            <li class="link">
                                <a href="classes/Medicamento.html" data-type="entity-link" >Medicamento</a>
                            </li>
                            <li class="link">
                                <a href="classes/MedicamentoItem.html" data-type="entity-link" >MedicamentoItem</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserLogin.html" data-type="entity-link" >UserLogin</a>
                            </li>
                            <li class="link">
                                <a href="classes/Usuario.html" data-type="entity-link" >Usuario</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AlertasService.html" data-type="entity-link" >AlertasService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CarrinhoService.html" data-type="entity-link" >CarrinhoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DoencaService.html" data-type="entity-link" >DoencaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MedicamentosService.html" data-type="entity-link" >MedicamentosService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});