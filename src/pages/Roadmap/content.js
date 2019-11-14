export default {
  banner: {
    pageTitle: ' ~~Ne~~skutečná síť',
    pageDesc: `12 let výzkumu a vývoje přechází do fáze spojení všech samostatných dílů toho, o čem mnozí říkali že je neuskutečnitelné: Safe Access For Everyone-Bezpečný přístup pro každého. `,
    latestUpdate: {
      overline: 'Poslední Update',
      date: '29 Srpen 2019',
      title: 'Vault Phase 1',
      para: `Poslední díly skládačky jsou hotovy a my teď máme SAFE CLI, SAFE Client Libs, Vault a SAFE Prohlížeč.`,
       CTA: {
         name: 'SafeNetwork Fórum',
         url: 'https://safenetforum.org/t/new-release-vault-phase-1-real-vault/29712'
       }
    }
  },
  subscribe: {
    title: 'Chci odebírat novinky:'
  },
  releases: {
    release1: {
      overline: 'Právě běží',
      title: 'Vault Phase 1',
      para:[
        `Tato fáze je primárně ukázka možností sítě pro uživatele (lidé používající síť k brouvzdání, sdílení, atd.) a tvůrce (vývojáře nebo autory obsahu).  Je jim umožněno vyzkoušet SAFE CLI a SAFE Client Libs, základní možnosti peněženky, ale také nové data typy v síti.`,
        'Vyzkoušení je jednoduché. Stačí stáhnout Vault binary, které poběží lokálně na tvém počítači. Detaily a odkaz na stažení najdeš zde [Fórum odkaz](https://safenetforum.org/t/new-release-vault-phase-1-real-vault/29712)'
      ],
      // accordion: {
      //   header: [
      //     'The Share Vault Network Feature',
      //     'Description',
      //     'Status'
      //   ],
      //   items: [
      //   ]
      // }
    },
    release2: {
      overline: 'Nadcházející milník',
      title: 'Fleming',
      para: ['Blížící se další milník SAFE Network. Zatímco Vault Phase 1 v předchozí fázi běžel pouze na počítači, se spuštěním Fleming se propojí se všemi ostatními Vault v síti. Umožní ukládat soubory, zabezpečenou komunikaci, otestuje platební systém včetně testovací měny SafeCoin.'],
      accordion: {
        header: [
          'Fleming vylepšení',
          'Popis',
          'Stav'
        ],
        items: [
          {
            feature: 'Osobní autentikátor',
            desc: 'Umožní se přihásit do decentralizované sítě bez svolení nebo existence třetí strany',
            status: 'Hotovo',
            para: [
              'MaidSafe vyvinuli technologii, která umožní komukoli se přihlásit bezpečně do decentralizované sítě, bez potřeby ověření třetí stranou. Testovací Alpha 2 síť je jediná na celém světě, kde podobný systém funguje. *Do startu sítě Fleming je od Listopadu 2019 testovací síť Alpha 2 vypnuta'
            ],
            // CTA: {
            //   name: 'Read More',
            //   url: 'https://safenetwork.tech/roadmap/#self-authentication'
            // },
          }, {
            feature: 'Auto-šifrování',
            desc: 'Data jsou zašifrována v počítači ještě před uložením v síti: žádné klíče ani hesla neopustí tvé zařízení ',
            status: 'Hotovo',
            para: [
              'Vyvinuto v MaidSafe, toto je proces při kterém každý soubor před uložením v síti, je nejdříve rozdělen na kousky (chunks), zhašován a zašifrován. Tyto kousky jsou poté samy zašifrovány pomocí haše dalšího kousku ze stejného souboru.'
            ],
            video: {
              url: 'https://s3.eu-west-2.amazonaws.com/ms-marketing/website-videos/Self+Encryption+on+the+SAFE+Network.mp4',
              caption: 'Auto-šifrování s vysvětlením'
            }
          }, {
            feature: 'Disjoint sekce',
            desc: 'Neboli sharding-škálování, umožní síti rozdělit zátěž a odpovědnost dle specifických funkcí sítě a zvýšit tak efektivitu.',
            status: 'Hotovo',
            para: [
              'Zajistí, aby síť se mohla škálovat řízením odpovědnosti každého uzlu, bez potřeby lidského zásahu. Také slouží k zajištění bezpečnosti, kdy si útočník nemůže vybrat místo a cíl útoku.'
            ],
            CTA: {
              name: 'Podrobnosti',
              url: 'https://safenetforum.org/t/step-by-step-the-road-to-fleming-6-disjoint-sections/28530'
            },
          }, {
            feature: 'Message Relay',
            desc: 'Zajistí, aby zpráva mohla být poslána mezi různými uzly Disjoint Sekce',
            status: 'Hotovo',
            para: [
              'Zajistí aby zpráva mohla být poslána mezi různými uzly Disjoint Sekce. V této ranné fázi každá zpráva obsahuje podpis členů Disjoint sekce, ale již neověřuje samotný podpis.'
            ],
          },
          {
            feature: 'PARSEC',
            desc: 'Algoritmus asynchronního konsensusu ',
            status: 'Hotovo',
            para: [
              'Zajistí, aby celosvěstová, decentralizovaná, neblokovatelná síť dosáhla shody v případech, které je potřeba schválit a určila pořadí, ve kterém se mají uložit. Na základech DAG algoritmu, který dosahuje nejvyššího možného bezpečnostního standardu, vyvinuli v MaidSafe, aby zajistili, že je matematicky jisté, aby každá událost v SAFE Network dosáhne shody. Při spuštění Fleming bude PARSEC ve velice asynchronní verzi, která bude plně asynchronní později.'
            ],
            CTA: {
              name: 'Podrobnosti',
              url: 'https://hub.safedev.org/parsec/'
            },
          }, {
            feature: 'Stárnutí uzlu',
            desc: 'Decentralizovaný systém ohodnocení výkonu a chování uzlů připojených do sítě, bez potřeby lidských zásahů.',
            status: 'Ve vývoji',
            para: [
              'Každý uzel(Node) v SAFE network získá svůj věk ze samotné sítě. Tento věk se zvýší pokaždé, kdy dojde k pohybu mezi Disjoint sekcemi, kde pouze nejstarší (Elders) mají právo volit v PARSEC konsensus algoritmu.',
              'Prozkoumej detaily v RFC, a [zapoj se do diskuze](https://forum.safedev.org/t/rfc-45-node-ageing/157) na safedev fóru.'
            ],
            CTA: {
              name: 'Přečíst RFC',
              url: 'https://github.com/maidsafe/rfcs/blob/master/text/0045-node-ageing/0045-node-ageing.md'
            },
          }, {
            feature: 'SMD Zabezpečený přenos zpráv',
            desc: 'Důvěrná komunikace mezi uzly - zprávy z autentizovaných zdrojů',
            status: 'Ve vývoji',
            para: [
              'Zajistí, aby všechny zprávy byly poslány a podepsány a uzly bez znalosti odesílatele mohli zprávám důvěřovat. Toto řeší problém, kterému čelí mnohé jiné projekty založeny na blockchain technologii a je nezbytná pro síť, která přesouvá uzly dle svých potřeb.'
            ],
            CTA: {
              name: 'Přečíst RFC',
              url: 'https://github.com/maidsafe/rfcs/blob/master/text/0056-secure-message-delivery/0056-secure-message-delivery.md'
            },
          }, {
            feature: 'RMD Spolehlivé doručení zpráv',
            desc: 'Komunikace zajišťující spolehlivé doručení zpráv.',
            status: 'Hotovo',
            para: [
              'Zajistí, aby všechny odeslané zprávy byly spolehlivě doručeny na své místo, i přesto, kdy některé uzly odpovědné za doručení vykazují chyby.'
            ],
            CTA: {
              name: 'Přečíst RFC',
              url: 'https://github.com/maidsafe/rfcs/blob/master/text/0058-reliable-message-delivery/0058-reliable-message-delivery.md'
            },
          }, {
            feature: 'QUIC-P2P',
            desc: 'Základní programovací jazyk pro veškerou síťovou komunikaci nových uživatelů připojených do SAFE network',
            status: 'Hotovo',
            para: [
              'Software, který umožní počítačům šifrovanou komunikaci v SAFE Network. Tento software zakládá infrastrukturu pro zprávy, zatímco routing vrsta stanoví pravidla jakou cestou a směrem mají tyto zprávy jít.'
            ],
          }, {
            feature: 'Detekce záškodníků',
            desc: 'Prevence záškodných uzlů v narušovaní konsensu algoritmu PARSEC',
            status: 'Hotovo',
            para: [
              'Způsob, jakým identifikovat záškodné uzly, které škodí síti uvnitř Disjoint Sekce a mechanismus, kterým souhlasí s odstraněním takového uzlu, nebo zmírnění rizika.'
            ],
            CTA: {
              name: 'Přečíst RFC',
              url: 'https://github.com/maidsafe/rfcs/blob/master/text/0050-malice_in_parsec/0050-malice_in_parsec.md'
            }
          }, {
            feature: 'Test SafeCoin & Peněženka',
            desc: 'Umožní síti inkasovat poplatky a uživatel může přijímat a odesílat platby z peněženky v měně nazývané Test SafeCoin',
            status: 'Hotovo',
            para: [
              'SafeCoin slouží k podpoře a motivaci jednotlivců, kteří dodávají výpočetní zdroje, která síť potřebuje: HDD/SSD, broadband a výkon CPU ',
            ]
          }, {
            feature: 'Farmaření',
            desc: 'Proces, při kterém SafeCoin je vyplacen těm, kteří poskytnou síti své zdroje  ',
            status: 'Ve vývoji',
            para: [
              'Uživatelé, kteří se rozhodli poskytnout síti své zdroje, které síť vyžaduje, mají možnost získat SafeCoiny. Tento mechanismus zajistí, že síť odmění ty, kteří poskytují požadované zdroje.',
            ],
          }, {
            feature: 'Vault pro uživatele',
            desc: 'Možnost pro každého stáhnout si software and spustit Vault u sebe a tím se podílet na větší decentralizaci SAFE Network ',
            status: 'Ve vývoji',
            para: [
              'Decentralizované uložiště dat je klíčová část SAFE Network. Tímto se umožní uzlům se zapojit se svými zdroji, které můžou poskytnout.'
            ],
          }, {
            feature: 'Veřejné a neveřejné typy dat',
            desc: 'Umožní síti uložit veřejný a neveřejný obsah přes AppendOnlyData, nebo MutableData typ dat',
            status: 'Hotovo',
            para: [
              'Veřejné data jsou pro obsah, který je dostupný všem jako weby, blogy, nebo vědecké publikace. Pro takový druh obsahu je důležité, zachovat historii všech změn. Historii není možné měnit, či manipulovat ve svůj prospěch. Ta musí být zachována navždy. Neveřejné data jsou data, která nejsou určena být komukoli jinému dostupná jako osobní údaje, rodinné alba, nebo data organizací a firem uložena na síti'
            ],
            //CTA: {
              //name: 'Read the RFC',
              //url: 'https://github.com/maidsafe/rfcs/blob/master/text/0054-published-and-unpublished-mutable-data/0054-published-and-unpublished-mutable-data.md'
            //},
          }, {
            feature: 'Neveřejný ImmutableData typ dat',
            desc: 'ImmutableData jsou neveřejná, nebo veřejná s tím rozdílem, že neveřejná mohou být smazána',
            status: 'Hotovo',
            para: [
              'Je mnoho důvodů, kdy uživatelé mají potřebu vytvořit ImmutableData pro uložení soukromého obsahu. Do doby, než je obsah zveřejněn (dostupný ostatním) bude možné soubor smazat pouze majitelem těchto dat.'
            ],
            //CTA: {
              //name: 'Read the RFC',
              //url: 'https://github.com/maidsafe/rfcs/blob/master/text/0055-unpublished-immutable-data/0055-unpublished-immutable-data.md'
            //},
          }
        ]
      }
    },
    release3: {
      overline: 'Další v pořadí',
      title: 'Maxwell',
      para: ['S vydáním SAFE Network Maxwell budovaném na Fleming bude umožněno síti vydávat aktualizace, vylepší bezpečnost a připraví podmínky pro změnu z test SafeCoin na opravdový SafeCoin.'],
      accordion: {
        header: [
          'Maxwell vylepšení',
          'Popis',
          'Stav'
        ],
        items: [
          {
            feature: 'Spam ochrana',
            desc: 'Schopnost zvládat spam útoky',
            status: 'Návrh',
            para: [
              'Spam zahrnuje uzly zkoušející aktivity, které by němely dělat, nebo ty oprávněné, ale které jsou v měřítku, co vedou k zahlcení sítě. Síť by měla zvládnout adekvátní objem takových útoků.'
            ],
          }, {
            feature: 'Správa identit ',
            desc: 'Možnost pro uživatele vytvářet a spravovat vícero identit pro použití v síti',
            status: 'Návrh',
            para: [
              'Uživetelům bude umožněno vytvářet vícero identit v síti. Každá z nich může být použita dle potřeb uživatele, aby každá mohla být nezávislá, dokud uživatel vyloženě nevyžaduje je propojit. Tímto se zlepší ochrana identit a soukromí.'
            ],
          },
          {
            feature: 'Aktualizace',
            desc: 'Schopnost sítě se samostatně aktualizovat, bez způsobení škod',
            status: 'Návrh',
            para: [
              'SAFE Network bude mít možnost se sama aktualizovat, aby zavedla nová vylepšení a rozšířila je na celou síť. Aktualizace se musí provést takovým způsobem, aby nevzikly žádné škody.',
              'Toto je důležitý krok v evoluci sítě, jelikož to umožní aplikovat nejnovější software, který může být nadále vylepšován v aktuální síti, bez narušení existujích funkcí.'
            ],
            CTA: {
              name: 'Přejít na fórum',
              url: 'https://safenetforum.org/t/step-by-step-the-road-to-fleming-5-network-upgrades/28319'
            }
          }
        ]
      }
    },
    release4: {
      overline: 'Již brzy',
      title: 'Nadcházející vylepšení sítě',
      para: ['Tento seznam obsahuje výčet úkolů, která chybí dodělat. Pořadí by nemělo být pevně dané, až na určité případy. Práce budou probíhat paralelně různými týmy.'],
      accordion: {
        header: [
          'Vylepšení',
          'Popis',
          'Stav'
        ],
        items: [
          {
            feature: 'Zabezpečené ostrovy',
            desc: 'Důvěrné spustitelné prostředí uvnitř existujících počítačů',
            status: 'Návrh',
            para: [
              'Tvoří oblast v rámci hardware, která je bezpečná s důvěrným prostředím bez ohledu na zbytek počítače. Záměr je vytvořit něco jako minipočítač uvnitř počítače, do kterého se nelze dostat.'
            ],
          }, {
            feature: 'Rozvoj sítě',
            desc: 'Umožní síti dlouhodobě růst a škálovat',
            status: 'Návrh',
            para: [
              'Síť umožní kontrolovaný růst, kde zajistí, aby majorita podstatných uzlů byla v dobrém stavu a dodržovala pravidla sítě. Tento dlouhodobě udržitelný růst by se měl vyvarovat nevyžádaných sloučení mezi sekcemi.'
            ],
          }, {
            feature: 'Síťové restarty',
            desc: 'Schopnost sítě se obnovit po neočekávané katastrofě',
            status: 'Návrh',
            para: [
              'V případě katastrofického výpadku, by se síť měla schopna sama obnovit, jelikož přetrvá celistvost nezbytných dat, které umožní znovu obnovit funkčnost, na základě posledního známého stavu sítě.'
            ],
          }, {
            feature: 'Podpora RDF',
            desc: 'Síť bude mít nativní podporu RDF, umožňující datům být kompatibilní se sémantickým webem',
            status: 'RFC',
            para: [
              'Zajistí, aby byla data uložena na SAFE Network ve formátu, srozumitelným pro další sémantické web projekty, jako je Solid.'
            ],
            CTA: {
              name: 'Přečti RFC',
              url: 'https://github.com/nbaksalyar/rfcs/blob/master/text/0000-rdf-in-client-libs/0000-rdf-in-client-libs.md'
            },
          }, {
            feature: 'Zamlžení uložených dat',
            desc: 'Všechna data uložena ve Vault na jednotlivém počítači musí být kompletně zašifrována a nečitelná',
            status: 'Návrh',
            para: [
              'Zajistí, aby i ta nejmenší část dat uložena ve Vault, nemohla být přečtena osobou ovládající daný počítač s touto částí.'
            ],
          }, {
            feature: 'Common Coin',
            desc: 'Nahrazuje aktuální "Concrete Coin" za "Common Coin" aby PARSEC mohl být plně asynchronní',
            status: 'Design',
            para: [
              , '"Common Coin" je nástroj pro uzly, kterým umožní vytvářet "náhodné" binární hodnoty (pravda/ lež). Pokaždé kdy si uzel hodí mincí, všem ostatním uzlům je garantováno, že zaznamenali stejnou hodnotu pro své hody mincí. Také, tato hodnota musí být nepředpověditelná, což znamená, že záškodný uzel nezná hodnotu dřív, než ji zaznamená poctivý uzel.'
            ],
          }
        ]
      }
    }
  },
  apps: {
    title: 'Aplikace a zkušenosti',
    list: [
      {
        id: 'safeBrowser',
        name: 'Prohlížeč SAFE',
        para: 'Poslední update přináší některé funkce "věčného" webu a podobně jako osobní autentizátor: umožní ti se bezpečně přihlásit do SAFE Network, s možností spravovat přístupy a povolení SAFE aplikací.',
        status: 'Poslední verze v0.15.2'
      }
    ],
    currentMilestone: {
      status: 'Aktuální milník',
      title: 'Věčný web',
      para: 'SAFE Network je navržena tak, aby veřejná data byla trvalá a nikdo je nemohl smazat. Každý má možnost mít i soukromá data, ale jakmile jsou jednou zveřejněna, již zůstanou všem dostupná navždy. Tento milník chce ukázat na úžásnou sílu takové sítě, vylepšit uživatelské zkušenosti s tímto modelem a připravit vše pro start sítě.',
      accordion: {
        header: [
          'Vylepšení',
          'Popis',
          'Stav'
        ],
        items: [
          {
            feature: 'Prohlížeč SAFE',
            desc: 'Zlepšení designu prohlížeče speciálně pro novou funkcionalitu, kterou přináší Věčný web',
            status: 'Ve vývoji',
            para: [
              'Prohlížeč SAFE s novými vlastnostmi rozšíří možnosti, které jsou unikátní pro Věčný web. Umožní například prohlížet si historii jakékoli stránky od jejího počátku, až po poslední verzi.'
            ],
          },
          {
            feature: 'Mobilní prohlížeč',
            desc: 'Mobilní verze prohlížeče SAFE, která je limitována na prohlížení veřejných stránek v SAFE Network',
            status: 'Hotovo',
            para: [
              'Umožní každému přístup na SAFE Network přímo z prohlížeče tvého chytrého telefonu'
            ],
          },
          {
            feature: 'Správce dat',
            desc: 'Jednoduchá správa dat pro zveřejnění obsahu na SAFE stránkách a věčných dat',
            status: 'Ve vývoji',
            para: [
              'Nástroj, který poskytne nezbytné funkce pro nahrávání dat na SAFE Network, zveřejnění věčných dat a správu veřejných adres. Toto nahrazuje web hostingový manažer.'
            ],
          },
          {
            feature: 'SAFE CLI',
            desc: 'Pokročilé CLI pro správů účtu a dat',
            status: 'Ve vývoji',
            para: [
              'Příkazový řádek pro správu dat na SAFE Network. Umožní uživateli uložit data v síti, správu účtů, identit a nastavení oprávění. Tento nástroj využijí především frontend aplikace a funkce, jakou je například datový manažer, na ni budou stavět.'
            ],
          },
          {
            feature: 'PNS-Systém veřejných adres',
            desc: 'Obsah uložený na stránkách by měl být přístupný přes jednoduše čitélné URL díky decentralizované DNS: Systém veřejných adres - Public Name System',
            status: 'RFC',
            para: [
              'DNS překládá IP adresy do lidmi lehce čitelného formátu (např. http//216.58.206.35 znamená Google.com). Nynější systém je závislý na centralizovaných organizacích, které DNS servery spravují. SAFE Network odmítá být pod kontrolou určité skupiny, aby se vyhnula cenzuře a blokování obsahu.'
            ],
            CTA: {
              name: 'Přečti RFC',
              url: 'https://github.com/maidsafe/rfcs/issues/283'
            },
          },
        ]
      }
    },
    upcomingMilestones: {
      status: 'Následující milníky',
      list: [
        {
          title: 'Soukromá  komunikace',
          para: 'Pokud chceme svět, kde kdokoli může s kýmkoli bez obav komunikovat, pak soukromí je nezbytné. Tento milník chce právě tohoto dosáhnout.',
          accordion: {
            header: [
              'Vylepšení',
              'Popis',
              'Stav'
            ],
            items: [
              {
                feature: 'Private Messaging',
                desc: 'Send secure private messages between clients',
                status: 'Concept',
                para: [
                  'One of the most sought after features of the SAFE Network: secure, private, instant messaging.'
                ],
              },
              {
                feature: 'Identity Management',
                desc: 'Ability for users to create and manage multiple identities',
                status: 'Concept',
                para: [
                  'Improves the user experience for individuals as they switch between the identities (or profiles) that they choose to represent themselves with on the SAFE Network, without the need to create multiple accounts.'
                ],
              },
              {
                feature: 'Contacts Management',
                desc: 'Find, connect and stay up-to-date with other SAFE Network users  ',
                status: 'Concept',
                para: [
                  'Enables SAFE users to find and connect with other people across a range of applications in a consistent way.'
                ],
              },
            ]
          }
        },
        {
          title: 'Take Control of Your Data',
          para: 'The SAFE Network turns the current data ownership model on its head. Personal information will no longer be stored on corporate servers. Self Authentication gives you complete control over your data. You can grant (and revoke) permission for apps to use your data at any time and prevent any unauthorised company or third party ever gaining access.',
          accordion: {
            header: [
              'Vylepšení',
              'Popis',
              'Stav'
            ],
            items: [
              {
                feature: 'Data Manager',
                desc: 'Fine-grained management of your personal data',
                status: 'Concept',
                para: [
                  'The extension of the Data Manager tool to allow fine-grained control by individuals over their private and unpublished data.'
                ],
              },
              {
                feature: 'RDF Support',
                desc: 'Support storing and querying RDF resources in SAFE-Core',
                status: 'RFC',
                para: [
                  'Ensures that the SAFE Network understands a way of describing the architecture of data that is understood by other projects, such as Solid'
                ],
                CTA: {
                  name: 'Read the RFC',
                  url: 'https://github.com/maidsafe/rfcs/issues/289'
                },
              },
              {
                feature: 'SPARQL Support',
                desc: 'Add native support for SPARQL to allow searching of data',
                status: 'Concept',
                para: [
                  'Enhances the functionality of SAFE by adding SPARQL support to SAFE Client Libs and SAFE Vault.  This ensures that the Network can understand a well-known semantic query language, and enables users to search.'
                ],
              },
              {
                feature: 'Collaboration',
                desc: 'Tools to enable collaboration through sharing and group permissions on private unpublished data',
                status: 'Concept',
                para: [
                  'Manage sharing and permissions of private, unpublised data and files, for collaboration between individuals and groups. '
                ],
              },
              {
                feature: 'XOR URLs',
                desc: 'A way of sharing and accessing SAFE Network files without the need for a Public Name',
                status: 'Complete',
                para: [
                  'Create a system of standardised URL’s on the SAFE Network that are based on the XOR address of the content being referenced. Ensures that individuals can access and locate  data and files in a more user-friendly manner.'
                ],
              }
            ]
          }
        },
        {
          title: 'The New Digital Economy',
          para: 'The new digital economy is all about ensuring that you no longer pay for your digital life with data. Instead, you use a cryptocurrency that’s integral and distributed by the SAFE Network. You earn value in return for providing resources to the Network.',
          accordion: {
            header: [
              'Milestone Features',
              'Description',
              'Status'
            ],
            items: [
              {
                feature: 'Test Safecoin Wallet',
                desc: 'Transact using Test Safecoins',
                status: 'Development',
                para: [
                  'Users will be able to use Test Safecoin in the Network, allowing an ecosystem to built around the SAFE incentive mechanism. The ability to create multiple wallets, associate them with an identity, and also one-time-use wallets to enable anonymous transactions, will all be part of this.',
                ],
              },
              {
                feature: 'Vault User Interface',
                desc: 'Easily set up, run, and manage a Vault',
                status: 'Concept',
                para: [
                  'Users will see greatly-improved Vault User Experience. Anyone providing storage to the Network can expect to see a number of usability improvements, making it easy to offer resources and start farming on everyday home computers and devices.'
                ],
              },
            ]
          }
        }
      ]
    }
  }
}
