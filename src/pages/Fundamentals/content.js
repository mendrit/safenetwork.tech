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
          question: 'Skrýt veškeré IP adresy klienta od prvního spojení při routingu připojení',
          answer: [
            'Jakmile uživatel začne přímo komunikovat s kýmkoli jiným, poté co se připojil k prvnímu uzlu SafeNetwork, uživatelova IP adresa je skryta a dále již nevystopovatelná. Pro objasnění prvním spojením myslíme první uzel v síti SafeNetwork, což s připojením přes domácí Wi-Fi router může být až několikátý bod, pokud kolem Vás nejsou blízké nody sítě SafeNetwork.'
          ]
        },
        {
          question: 'Zapojit nové vaulty až jsou potřeba',
          answer: [
            'Tak jako v přírodě může i zde nekontrolovatelný růst vést k zániku. Na SafeNetwork by někdo mohl zaútočit jen tím, že připojí milióny nových uzlů, které hromadně vypne (případně se pokusí zneužít i jinak). Jako obrana proti takovému útoku síť povolí pouze nové uzly, když opravdu potřebuje. To zpomalí případného útočníka a naředí jeho uzly s těmi, kteří se chtějí zapojit jen s dobrými úmysly. Síť tak může vyrovnávat poptávku a nabídku k jejímu prospěchu, než záviset na vnější kontrole.'
          ]
        },
        {
          question: 'Zvýšit odměny farmářům, když je potřeba více zdrojů a snížit, když jich je dostatek',
          answer: [
            'Pokud by síť připojila každý nový uzel co se chce připojit, mohla by se stát terčem botnet útoku, nebo útočník by se snažil nasadit ohromné množství podvrhnutých uzlů v počátku sítě, když ještě není dostatečně robustní. Síť musí být schopna vyvažovat poptávku samotných vault, aby nevzniklo příliš moc uzlů s malým množstvím dat. To by vedlo k snížení odměn všem farmářům.'
          ]
        },
        {
          question: 'Hodnotit vaulty v průběhu času a zvýšit důvěru těm nejlépe hodnoceným',
          answer: [
            'Zásadní část „stárnutí uzlů" (což je jedna z cest jak se bránit Sybil útokům) spočívá ve faktu, že síť  je navržena, aby bylo umožněno pouze těm nejdůvěryhodnějším uzlům v rámci každé sekce hlasovat při rozhodování v rámci sítě.'
          ]
        },
        {
          question: 'Bez serverů',
          answer: [
            'SafeNetwork nikdy nebude závislý na serverech (tak jak jim dnes rozumíme), které by přinesly slabiny třetích stran a mařily význam celé sítě.'
          ]
        },
        {
          question: 'Digitální podpis všech transakcí',
          answer: [
            'Zaručením se, že všechny transakce mají digitální podpis, je síť schopna zajistit, aby všechny transakce byly autorizovány dle pravidel sítě.'
          ]
        },
        {
          question: 'Zajistí, aby přímé spojení klient-klient bylo vždy zdarma. Poplatky však budou, pokud zprávy mezi klienty přejdou přes část SafeNetwork',
          answer: [
            'Klienti jsou software programy, které umožní připojit uživatele do SafeNetwork. Zde nikdy nebude poplatek, pokud zprávy jsou zaslány přímo mezi dvěma klienty. Přestože, jiné nepřímé zprávy mezi klienty, které zahrnou část cesty přes síť, budou za určitou cenu.'
          ]
        },
        {
          question: 'Nikdy nepoužít čas jako síťový nástroj (přesto uzly mohou počítat s místním trváním)',
          answer: [
            'V decentralizované síti jakou je SafeNetwork, není žádný koncept času, dokud se nepoužijí služby centralizovaných serverů. SafeNetwork používá událostmi řízenené paradigma k obejití nutnosti se synchronizovat a poté použije časové období jako platné nástroje v síti. Tyto časové období vyžadují určité konstanty nastavené přímo vývojáři a to je přesně ten důvod, kterému se chce síť naprosto vyhnout.'
          ]
        },
        {
          question: 'Vždy použít pouze šifrované služby a síťový provoz',
          answer: [
            'Služby, nebo síťový provoz musí být šifrovány, pokud mají být použity v SafeNetwork.'
          ]
        },
        {
          question: 'Umožnit aktualizace v reálném čase bezpečným způsobem (síť odmítne aktualizace, které by ji ohrozily)',
          answer: [
            'Síť musí být schopna přijmout vylepšení, které je kompatibilní alespoň s poslední verzí síťového software. Za tímto účelem je potřeba si ověřit chování nového vylepšení v praxi. Ačkoli to bude vyžadovat značné úsilí, každý uzel by měl spustit upgrade souběžně s aktuální verzí, než se rozhodne opravdu aktualizovat.'
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
