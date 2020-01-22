export default {
  title: 'Zásady SafeNetwork',
  desc: 'Zde je určitý koncept, který provází každou fázi vývoje sítě, již od jejího počátku v roce 2006. Od té doby tato komunita narostla a nás těší vidět kolik lidí a projektů zde přišlo, aby poznali opravdový význam celosvětové bezpečné a soukromé decentralizované platformy pro uchování dat a komunikaci.',
  qa: {
    section: {
      title: 'SafeNetwork bude...',
      items: [
        {
          question: 'Dovolí osobám si vytvořit vlastní účet s anonymním přihlášením a to bez překážek',
          answer: [
            'K vytvoření nového účtu a přihlášení se do sítě, nebude nikdy potřeba třetí strana. Tento process bude vždy veden přímo mezi uživatelem a sítí. Je však potřeba dodat, že z technických důvodů (aby se zamezilo útočníkům vytváření milionů účtů z důvodu zahlcení sítě apod.) vytvoření účtu může v určitých případech vyžadovat přítomnost SafeCoinu.'
          ]
        },
        {
          question: 'Umožní uživatelům bezpečně a bez prostředníků kontrolující obsah sdílet informace a zprávy',
          answer: [
            'SafeNetwork nikdy nebude mít účty třetích stran, které by mohly číst, nebo si ukládat informace zaslané samotnými uživateli. (Pokud to uživatel nebude přímo vyžadovat).'
          ]
        },
        {
          question: 'Dovolí posílat SafeCoin komukoli bez transakčních poplatků',
          answer: [
            'Každý uživatel bude moci použít jakoukoli svou identitu a adresu své peněženky, aby mohl posílat a obrdžet SafeCoin.'
          ]
        },
        {
          question: 'Umožní uživatelům vytvářet a sdílet data po celém světě anonymně',
          answer: [
            'Síť vždy zajistí, aby uživatel měl možnost poslat transakce a zprávy s dočasnou identitou, která nemá stopy k žádné jiné osobě (identitě) na síti.'
          ]
        },
        {
          question: 'Nechá kohokoli si prohlížet obsah anonymně a bez poplatků',
          answer: [
            'Je zásadní, aby nový decentralizovaný web byl bez bariér. Jedna z nejvíce důležitých zásad pro celosvětovou společnou platformu je, že kdokoli má přístup k veřejnému obsahu kdykoli zdarma a bez potřeby zakládání účtu.'
          ]
        },
        {
          question: 'Dovolí uživatelům spravovat vícero identit na jednom účtu',
          answer: [
            'Každý klient účtu spravuje informace o uživateli, což zahrnuje i vícero identit. Tyto identity jsou jakoby kryptografické páry klíčů.'
          ]
        },
        {
          question: 'Nechá uživatele použít jeho jakoukoli identitu k poslání/obdržení SafeCoin',
          answer: [
            'Každý jednotlivec musí mít možnost použít jakoukoli svou identitu jako adresu peněženky, aby mohl poslat i obdržet SafeCoiny.'
          ]
        },
        {
          question: 'Uloží data na věčnost',
          answer: [
            'Veškeré veřejné data na síti budou nezměnitelné a dostupné na síti na věčnost. Podobně nyní funguje například web archive, který ukládá různé verze stránek i se zveřejněnými chybami. Bude nemožné smazat jakékoli data ze sítě, poté co byly nahrány na síť. To neznamená, že nemůžete změnit data, ale budou to pouze „sekvence", kde předhozí verze dat zůstane zachována (ať už jsou veřejné, nebo neveřejné).'
          ]
        },
        {
          question: 'Nikdy nevyžadovat heslo, aby bylo uloženo na síti, nebo na zařízení použitých klientem k přístupu na síť',
          answer: [
            'Síť nebude nikdy uchovávat heslo, jelikož je to běžný způsob jak přijít o data. Místo toho bude uživatel potřebovat zadat heslo pouze lokálně na zařízení pro přístup na síť.'
          ]
        },
        {
          question: 'Dovolí každému uživateli z jakéhokoli zařízení přístup na síť a nezanechá po něm žádné stopy',
          answer: [
            'Síť musí být dostupná pro každého z jakéhokoli zařízení. Po odhlášení uživatele ze sítě, nezůstanou v zařízení žádné stopy (kromě toho, že pro přístup na síť je potřeba prohlížeč, případně jiný software), které by ukázaly na aktivity, co daný uživatel na síti dělal.'
          ]
        },
        {
          question: 'Scrub all Client IP addresses from Hop 1 of the overlay network (i.e on SAFE)',
          answer: [
            'After a User has started to communicate directly with anyone else after the first SAFE Network node that it connects to, the User’s IP address is scrubbed and untraceable. For clarity, we are using the phrase ‘Hop 1’ to refer to the transfer directly after that connection to the first SAFE Network node (not the hop that may take place from your computer to your home WiFi router, for example).'
          ]
        },
        {
          question: 'Only accept more Vaults when it needs them',
          answer: [
            'Like any species or group of organisms, unbounded growth leads to demise. The SAFE Network could be attacked by a bad actor simply adding millions of nodes and then closing them down (or worse). To help prevent this, the Network will only allow new nodes to join when it needs them. This also nicely slows any attacker and dilutes them with good actors also trying to join. The Network can then balance supply and demand as it sees fit as opposed to relying on external controls.'
          ]
        },
        {
          question: 'Increase farming rewards when it needs more resources (Vaults) and decrease rewards when resources are plentiful',
          answer: [
            'If the Network simply accepted any Vault that wanted to join, it would likely either be targeted by a botnet attack or an attacker might attempt to set up an overwhelming number of malicious nodes initially whilst the Network size is small at launch. The Network must be able to balance this supply of Vaults itself to avoid there being a large number of nodes that have very little data, as this would push the farming rates down.'
          ]
        },
        {
          question: 'Rank nodes over time and increase trust in higher ranked nodes',
          answer: [
            'A crucial part of Node Ageing (one of the ways by which the SAFE Network prevents Sybil attacks) comes from the fact that the Network is designed to only permit the most trustworthy nodes within each of the Close Groups to vote on the decisions in the Network.'
          ]
        },
        {
          question: 'Not have servers',
          answer: [
            'The SAFE Network will never rely on servers (as the term is traditionally understood) as to do so introduces a third party weakness that undermines the entire Network.'
          ]
        },
        {
          question: 'Digitally sign all transactions',
          answer: [
            'By ensuring that all transactions are digitally signed, the Network is able to ensure that the transactions have been authorised in accordance with the rules of the Network.'
          ]
        },
        {
          question: 'Ensure that Client-to-Client direct messages are free. It will charge, however, for Client-to-Client messages involving traversal through the SAFE Network',
          answer: [
            'Clients are software programs that allow users to connect to the SAFE Network. There will never be charge levied by the Network if messages are sent directly between two Clients. However, any indirect messages that are sent between Clients that involve travel across the Network will carry a cost.'
          ]
        },
        {
          question: 'Never use time as a network tool (although nodes may use local durations)',
          answer: [
            'There is no concept of time in a decentralised network such as SAFE unless it reaches out to centralised servers and services. SAFE uses a completely event-driven paradigm to circumvent the need to try and synchronise and then use time periods as valid tools on the network. These periods require magic numbers which would need to be set by developers and this is something the Network avoids with rigour.'
          ]
        },
        {
          question: 'Only ever use encrypted services and encrypted traffic',
          answer: [
            'Services or traffic must be encrypted if they are to be used by the SAFE Network.'
          ]
        },
        {
          question: 'Allow real-time upgrades in a secure manner (i.e the Network will refuse upgrades that could break it)',
          answer: [
            'The Network must be able to roll out improvements which are compatible with at least the previous version of the Network software, in order to ensure that the new iteration is an improvement in practice. As this will require significant effort, each node may run upgrades in parallel to existing working code before upgrading.'
          ]
        },
      ]
    }
  },
  safecoin: {
    title: 'Safecoin',
    lists: [
      {
        name: 'A.',
        para: 'Safecoin is the unique incentivisation mechanism built into the SAFE Network. All Safecoins are recycled when they are paid to the Network in exchange for resources. On launch, Safecoin will be distributed as follows: (1) Pay the creators of the Network (MaidSafe shareholders) 5% of the total Safecoin; (2) Pay the 2014 crowdsale investors of the Network 10% of the total Safecoin.'
      },
      {
        name: 'B.',
        para: 'Safecoin will be distributed on an ongoing basis: (1) Pay Vaults for providing service (85% of rewards); (2) Pay developers who produce apps that people use (10% of rewards); (3) Pay the maintainers of the Network code (5% of rewards)'
      },
    ],
    notes: {
      title: 'Note:',
      para: 'Whilst the above explanation is a handy approximation of the split, the rewards will in fact be dynamically adjusted according to the Farming Rate determined by the Network:',
      points: [
        'Farmers who run the Vaults are paid at 100% of the Farming Rate for all GETs on the Network. I.e. 86.95% (100/115) of all rewards.',
        'Application Developers are paid at 10% of the Farming Rate for all GETs on the Network (that relate to their applications). I.e. 8.695% (10/115) of all rewards.',
        'Maintainer Developers are paid at 5% of the Farming Rate for all GETs on the Network. I.e. 4.348% (5/115) of all rewards.'
      ]
    }
  }
}
