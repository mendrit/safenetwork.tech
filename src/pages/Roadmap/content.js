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
          'Fleming vlastnosti',
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
      overline: 'Next Up',
      title: 'SAFE Maxwell Network',
      para: ['The release of SAFE Maxwell builds on top of Fleming and enables the network to upgrade, improves security and sets the ground work for switching test SAFE Coin to real SAFEcoin.'],
      accordion: {
        header: [
          'Maxwell Feature',
          'Description',
          'Status'
        ],
        items: [
          {
            feature: 'Spam Handling',
            desc: 'Ability to handle spam attacks',
            status: 'Concept',
            para: [
              'Spam includes nodes attempting to carry out activities that they shouldn’t or valid activities at a scale that is intended to choke the Network. The Network should be able to withstand a reasonable volume of such attacks.'
            ],
          }, {
            feature: 'Identity Management',
            desc: 'Ability for users to create and manage multiple identities for use on the network',
            status: 'Concept',
            para: [
              'Users will be able to create multiple identities in the Network. Each identity can be used as required by the User and each should be independent unless the User explicitly wants to connect them. This helps protect identity and privacy.'
            ],
          },
          {
            feature: 'Upgrades',
            desc: 'The ability for the Network to upgrade itself, with no harm caused',
            status: 'Concept',
            para: [
              'The Network will have the ability to upgrade itself in order to allow features and improvements to disseminate throughout the Network. The upgrades must be done in a way such that they don’t cause harm to the Network.',
              'This is an important stage in the evolution of the Network as it means that new software can then continue to be rolled out onto the existing Network without disrupting the existing functionality.'
            ],
            CTA: {
              name: 'Follow the Discussion',
              url: 'https://safenetforum.org/t/step-by-step-the-road-to-fleming-5-network-upgrades/28319'
            }
          }
        ]
      }
    },
    release4: {
      overline: 'Coming Soon',
      title: 'Upcoming Network Features',
      para: ['The following list represents network work that remains to be completed. The order should not be seen as fixed in any way as in certain cases, work will be carried out in parallel by different teams.'],
      accordion: {
        header: [
          'Feature',
          'Description',
          'Status'
        ],
        items: [
          {
            feature: 'Secure Enclaves',
            desc: 'A trusted executable environment within existing computers',
            status: 'Concept',
            para: [
              'Creates an area within the hardware of a computer that is a secure, trusted environment that stands separate from the rest of the computer. It functions like a mini-computer inside existing computers that cannot be opened.'
            ],
          }, {
            feature: 'Network Growth',
            desc: 'Allow the network to grow and scale in a sustainable way',
            status: 'Concept',
            para: [
              'The Network allows controlled growth to ensure that the majority of decision-makers are healthy nodes that follow the rules of the Network. This growth should be sustainable in order to avoid unnecessary mergers between Sections.'
            ],
          }, {
            feature: 'Network Restarts',
            desc: 'Ability for the network to restart after a catastrophe',
            status: 'Concept',
            para: [
              'In the event of a catastrophic outage, the Network should be able to rebuild itself because it maintains the integrity of essential data (such as chain history) which enables it to start functioning again on the basis of the last known state of the Network.'
            ],
          }, {
            feature: 'RDF Support',
            desc: 'The Network will have native support for RDF, enabling data to be compatible with the Semantic Web',
            status: 'RFC',
            para: [
              'Ensures that data on the SAFE Network is stored in such a way that the format can be understood by other Semantic Web projects, such as Solid.'
            ],
            CTA: {
              name: 'Read the RFC',
              url: 'https://github.com/nbaksalyar/rfcs/blob/master/text/0000-rdf-in-client-libs/0000-rdf-in-client-libs.md'
            },
          }, {
            feature: 'Obfuscating stored data',
            desc: 'All data stored within a Vault on an individual’s computer must be entirely encrypted and unreadable',
            status: 'Concept',
            para: [
              'Ensures that even the smallest piece of data that is stored in a Vault cannot be read by the person controlling the computer on which it is stored.'
            ],
          }, {
            feature: 'Common Coin',
            desc: 'Replace our concrete coin with a common coin to make PARSEC fully asynchronous',
            status: 'Design',
            para: [
              'Common coin is a device that nodes can use to generate a “random” binary value (true or false). Every time a node flips the coin, all other nodes are guaranteed to observe the same value for their coin flip. Also, the value must be unpredictable, which means that no malicious node can know the outcome before a honest node has observed it.'
            ],
          }
        ]
      }
    }
  },
  apps: {
    title: 'Apps and User Experience',
    list: [
      {
        id: 'safeBrowser',
        name: 'SAFE Browser',
        para: 'The latest release includes some of the beginnings of the Perpetual Web, as well as the Authenticator: enabling you to securely sign in to the SAFE Network, and manage access and permissions of SAFE Apps.',
        status: 'Latest Version v0.15.2'
      }
    ],
    currentMilestone: {
      status: 'Current Milestone',
      title: 'The Perpetual Web',
      para: 'The SAFE Network is designed to ensure that public data is permanent and can never be deleted. Individuals and groups can choose to keep their data private, but once it’s been published, it will remain permanently available. This milestone aims to showcase the incredible power of this facet of the Network, by building out the User Experience, and iterating on it right through to launch.',
      accordion: {
        header: [
          'Milestone Features',
          'Description',
          'Status'
        ],
        items: [
          {
            feature: 'SAFE Browser',
            desc: 'Enhancements to the browser designed specifically to take advantage of the functionalities of the Perpetual Web',
            status: 'Development',
            para: [
              'The SAFE Browser functionality will be extended to incorporate new features that are unique to the Perpetual Web, such as the ability to roll-back through the version history of any SAFE website or asset.'
            ],
          },
          {
            feature: 'Mobile Browser',
            desc: 'Mobile version of SAFE browser which is limited to browsing published data from the SAFE Network',
            status: 'Complete',
            para: [
              'Enables individuals to access the SAFE Network directly by using a browser on their mobile phone'
            ],
          },
          {
            feature: 'Data Manager',
            desc: 'Streamlined publishing of SAFE sites and Perpetual Data',
            status: 'Development',
            para: [
              'A suite of tools which provides the necessary functionality to add data to the SAFE Network, publish perpetual data, and manage Public Names. This will supersede the Web Hosting Manager.'
            ],
          },
          {
            feature: 'SAFE CLI',
            desc: 'An advanced CLI to manage accounts and data',
            status: 'Development',
            para: [
              'A command line tool to manage data on the SAFE Network. It will allow the user to store data on the network and manage accounts, identities, and permissions. This is the tool that the frontend apps and features—such as the Data Manager—will build upon.'
            ],
          },
          {
            feature: 'Public Name System',
            desc: 'Content stored should be accessible with human-readable URLs, via a decentralised domain name system: the Public Name System',
            status: 'RFC',
            para: [
              'A domain name system translates numerical IP addresses into a format that can be read by humans (eg. http//216.58.206.35 resolves to Google.com). The current web relies on a centralised organisation to maintain that record. The SAFE Network requires this process to be outside the control of a single party in order to avoid censorship and repression.'
            ],
            CTA: {
              name: 'Read the RFC',
              url: 'https://github.com/maidsafe/rfcs/issues/283'
            },
          },
        ]
      }
    },
    upcomingMilestones: {
      status: 'Upcoming Milestones',
      list: [
        {
          title: 'Private Communications',
          para: 'If we want a world in which individuals can communicate freely whenever they choose, privacy is essential. This milestone aims to deliver just that.',
          accordion: {
            header: [
              'Milestone Features',
              'Description',
              'Status'
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
              'Milestone Features',
              'Description',
              'Status'
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
