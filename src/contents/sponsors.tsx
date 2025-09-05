import "./sponsors.css"

type Sponsor = {
    id: number;
    name: string;
    image: string;
    derciption: string;
};

const categories = ["Platinum", "Gold", "Silver", "Bronze"];

const sponsors: Sponsor[][] = [
    // Platinum
    [
        {
            id: 1,
            name: "University of Ioannina",
            image: "https://static.igem.wiki/teams/5684/wikipics/sponsors/c-uoi.webp",
            derciption: "We thank the University of Ioannina for their continuous support and encouragement throughout our iGEM journey.",
        },
        {
            id: 2,
            name: "Prefecture of Epirus",
            image: "https://static.igem.wiki/teams/5684/wikipics/sponsors/c-perifereia.webp",
            derciption: "We are grateful for the support provided by the Prefecture of Epirus.",
        },
        {
            id: 3,
            name: "Pfizer",
            image: "https://static.igem.wiki/teams/5684/wikipics/sponsors/c-pfi.webp",
            derciption: "We appreciate the support from Pfizer in our endeavors.",
        },
    ],
    // Gold
    [
        {
            id: 4,
            name: "Help pharmaceuticals",
            image: "https://static.igem.wiki/teams/5684/wikipics/sponsors/c-helppharm.webp",
            derciption: "We thank Help pharmaceuticals for their support and contribution to our project.",
        },
        {
            id: 5,
            name: "Syngenta" ,
            image: "https://static.igem.wiki/teams/5684/wikipics/sponsors/c-sygenta.web",
            derciption: "We are grateful for the support provided by Syngenta.",
        },
        {
            id: 6,
            name: "Polyeco",
            image: "https://static.igem.wiki/teams/5684/wikipics/sponsors/c-polyeco.webp",
            derciption: "We appreciate the support from polyeco in our endeavors.",
        },
        {
            id: 7,
            name: "Dimitriou",
            image: "https://static.igem.wiki/teams/5684/wikipics/sponsors/dimitriou.webp",
            derciption: "We appreciate the support from Dimitriou in our endeavors.",
        },
    ],
    // Silver
    [
        {
            id: 8,
            name: "Antisel",
            image: "https://static.igem.wiki/teams/5684/wikipics/sponsors/c-antisel.webp",
            derciption: "We thank Antisel for their support and contribution to our project.",
        },
        {
            id: 9,
            name: "ITE",
            image: "https://static.igem.wiki/teams/5684/wikipics/sponsors/c-ite.webp",
            derciption: "We are grateful for the support provided by ITE.",
        },
        {
            id: 10,
            name: "Skarelis",
            image: "https://static.igem.wiki/teams/5684/wikipics/sponsors/c-kd.webp",
            derciption: "We appreciate the support from Skarelis in our endeavors.",
        },
    ],
    // Bronze
    [
        {
            id: 11,
            name: "Say yes",
            image: "https://static.igem.wiki/teams/5684/wikipics/sponsors/c-sayyes.webp",
            derciption: "We thank Say yes for their support and contribution to our project.",
        },
    ]
]

export function Sponsors() {
  return (
    <>

        {/* Parent container */}
        <div className=" flex-column gap-4">
            {sponsors.map((category, index) => (

                <div key={index}>
                    <h2 className="text-center">{categories[index]} Sponsors</h2>
                    <div className=" justify-content-center flex-row category">
                        {category.map((donor) => (

                            <div key={donor.id} className=" flex-column align-items-center sponsor">
                                <h3>{donor.name}</h3>
                                <img src={donor.image} alt={`${donor.name} logo`} style={{maxWidth: '50%', maxHeight: '50%', minWidth: '30%', minHeight: '30%'}}/>
                                <p>
                                    {donor.derciption}
                                </p>
                            </div>
                        ))}
                    </div>

                    <hr />
                </div>
                
            ))}
        </div>

    </>
  );
}