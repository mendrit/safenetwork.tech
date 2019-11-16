export default {
  banner: {
    title: 'Autonomní, decentralizovaný, šifrovaný.',
    aside: {
      para: 'Postaven na volné kapacitě běžných počítačů, SAFE network nahrazuje zranitelnou infrastrukturu dnešního webu decentralizací a autonomní sítí. A to vše je zabezpečené a přístupné komukoli.',
      CTA: {
        name: `FAG 'Jak to funguje`,
        url: '/faq/#what-is-a-vault'
      }
    },
  },
  topics: [
    {
      name: 'Představení',
      desc: [
        {
          title: 'Co si představit pod SAFE Network',
          para: [
            'Pokud netušíš, co si představit pod novým decentralizovaným webem, tak v tom nejsi sám/a. Jedna z výhod nově budovaného webu na SAFE Network je, že data a soubory se stanou výrazně přehlednější - už nikdy nebudou uloženy na nedůvěryhodných a nezabezpečených serverech pod kontrolou třetích stran. Pouze ty k nim můžeš mít přístup odkudkoli z celého světa, což má svou hdonotu. Zde je potřeba obrovský kus práce k postavení takového systému, který naplní naše očekávání. Aby vše bylo srozumitelnější, zde je několik ukázek technologií, na kterých celý systém stojí.'
          ]
        }
      ]
    }, {
      name: 'Prohlížení',
      desc: [
        {
          title: 'Veškeré lidské znalosti, dostupné pro všechny lidi',
          para: [
            `Možná chceš jen vidět obsah na síti, což pro mnohé není velký rozdíl oproti dnešnímu webu, ale pro 1,5 miliardu lidí z celého světa jsou blokovány stránky jako Wikipedia. To je obrovský rozdíl v nových možnostech. Vše co stačí udělat, je stáhnout SAFE prohlížeč—bránu do nového internetu—přístupnou pro každého, odkudkoli.`,
            'Prohlížení SAFE Network je anonymní, soukromé a bez sledování nadnárodních firem, nebo vlád. Pouze ty si zvolíš co tě zajímá a co uděláš. Už tě nikdo nebude sledovat a zaznamenávat tvé chování na síti.'
          ]
        }
      ],
      aside: {
        position: 1,
        para: 'Máš chuť vyzkoušet SAFE Network a pomoct budovat Internet budoucnosti?',
        CTA: {
          name: 'Pojď se zapojit',
          url: '/get-involved/'
        }
      }
    }, {
      name: 'Ukládání dat',
      desc: [
        {
          title: 'Zaplať jednou a měj vše bezpečně uloženo navždy',
          para: [
            `Ukládání dat na síti je pro všechny výhodné. Proč? Protože za jeden, celkem malý poplatek v kryptoměně Safecoin, budou tvá data uložena navždy, v zašifrované podobě a přístupná po celém světě pouze tobě, pokud se nerozhodneš svá data sdílet.`
          ],
          quote: `"Tvé přihlašovací údaje nemůžou být ukradnuty, jelikož nejsou v žádné podobě uloženy na síti"`
        }, {
          para: `Tato síť nevyžaduje od tebe žádná povolení. To znamená, že nepotřebuješ odsouhlasit podmínky třetích stran a hlavně, nikdo tě nemůže blokovat. Toto je možné, protože SAFE Network má vlastní osobní autentikátor. Je to jediná decentralizovaná síť na světě, která ti umožní vytvořit si účet bezpečně a anonymně a umožní přihlášení, bez autorizace třetí strany, která spravuje přihlašující údaje. To znamená, že tvé přihlašovací údaje nemohou být ukradeny, protože nejsou v žádném bodě uloženy na síti.`
        }, {
          title: 'Uchování tvých dat v soukromí',
          para: [
            `Všechny soubory jsou uložena v šifrované podobě. Například, pokud si chceš uložit fotku, tak ta je chráněna řadou šifrovaných vrstev. Tvá fotka se rozdělí a na stejně malé díly, které se vícenásobně zašifrují částmi stejného souboru. Toto automatické šifrování probíhá na tvém počítači, než se soubor nahraje na síť. Vše je navrženo tak, aby klíč k tvému souboru jsi vlastnil/a pouze ty.`,
            `This is a very different approach to blockchain-based storage platforms which often secure just the pointer that shows where the data is stored. With data stored elsewhere, you can prove that data hasn’t been tampered with. But it doesn't protect the data itself. The SAFE Network has a different approach altogether. The data itself is encrypted and stored on the Network. That means no data stores to protect elsewhere.`
          ]
        }
      ],
    }, {
      name: 'Where Is Data Stored?',
      desc: [
        {
          title: 'Behold, The Serverless Internet',
          para: [
            'The Web is fragile today partly because data is stored in central locations. These become targets for hackers, thieves and data harvesters, or anyone else who wants to snoop around your personal data.',
            'The SAFE Network doesn’t have these centralised servers. It has no single point which can be attacked, hacked or snooped upon. All uploaded data is broken into chunks, encrypted, dispersed across the Network, and continually moved between computers.',
            'So how could an attacker search for your photo?  Without reading them, he’d have to know  which encrypted chunks made up any one file; where each piece was stored; control a number of computers that has responsibility for managing each of those different locations on the Network at any one point in time; and then somehow break the encryption (with no password!).',
            `And that's a simplification. It's actually much harder than that. But that gives you a feel for just how secure data is on the SAFE Network. Once you take on board that it's the Network itself that makes decisions autonomously about locations and who does what, the challenge facing any attacker becomes even clearer.`
          ]
        }
      ],
      aside: {
        position: 3,
        title: 'When will it be finished?',
        para: 'We’re at the dawn of a new Web, and the final pieces of the SAFE Network are being put in place',
        CTA: {
          name: 'See the Roadmap',
          url: '/roadmap/'
        }
      }
    }, {
      name: 'Who Stores Your Data?',
      desc: [
        {
          title: 'The Web hosted by everyone, controlled by no-one',
          para: [
            'With no centralised storage, data is instead stored in Vaults. People download free Vault software to their home computers which tells the Network that they’re happy to take part. By providing storage and bandwidth to support the Network, you can get rewarded in Safecoin, the cryptocurrency that powers the Network.',
            'The Network just makes use of the space you’ve offered and asks you to manage whichever chunks of encrypted data it needs to ensure the system is safe and resilient. The key point here is that no-one (either computers or Network) can read this data. Each chunk of encrypted data is managed by its own Group. The Network decides which computers should be members of which Groups and this changes frequently. And at no time can a person who runs a Vault read any of the data that his computer is storing.',
            'By running a Vault, your computer races to return any data that is requested by its owner. The rewards paid out by the system will be varied according the Network which varies the price of Safecoin in order to balance the Network in such a way that it consistently maintains around 30% of Vaults unused.'
          ]
        }
      ]
    }, {
      name: 'Network Architecture',
      desc: [
        {
          title: 'Anatomy of an Autonomous Network',
          para: [
            'The SAFE Network is self-managing. It manages how computers can act on the Network in real-time, changing roles and responsibilities dynamically in response to real-time changes without any input from humans or businesses.',
            'The Network is built on a foundation of open source software that allows computers to connect directly to each other, anywhere around the world. The Routing layer sits above this and sets the rules of the Network. This means that computers will act in a certain way that guarantees the Network will function efficiently without a centralised administrator.',
            'These rules ensure that computers reach agreement on what is and isn’t allowed, and the order in which they happen. Decisions are made by computers in standalone Sections that have a history of good behaviour and thanks to a cutting-edge DAG-based consensus algorithm called PARSEC, the Network is guaranteed to reach agreement despite vast numbers of events taking place simultaneously every second around the world.'
          ]
        }, {
          title: 'Global Communication, Global Scale',
          para: 'Whilst Sections stand alone, the Network is designed to enable trusted communications. It does this by ensuring that any contact between unknown computers is accompanied by cryptographic proof that every computer involved is a valid part of the Network. With Secure Message Relay comes Data Chains, a novel way which ensures that vast quantities of data can be passed reliably and securely between different nodes that have never known each other previously. All of this is made possible by the key design decision that we started with: all data is stored on the Network. Encrypted and ready to scale the globe from Day One.'
        }
      ]
    }
  ]
}
