import React, {useState} from 'react';
import './ChatBot.css'

interface FAQItem {
    question: string;
    answer:{
        text: string;
        bibliography?: string; /*optional*/
    }
}

const faqData: Record<'gr' | 'en', FAQItem[]> = {
    gr: [
            {
                question: 'Τι είναι ο πλάτανος;',
                answer: {
                    text:'Ένα πλατάνι, είναι μεγάλο, φυλλοβόλο, μακρόβιο δέντρο με πλατιά κόμη που προσφέρει άφθονη σκιά.',
                    bibliography:"'Platanus orientalis' from the website Trees and Shrubs Online (treesandshrubsonline.org/articles/platanus/platanus-orientalis/). Accessed 2025-08-17.",
                },
            },
        {
            question: 'Που φυτρώνει;',
            answer: {
                text:'Δύο κύρια είδη είναι το Platanus orientalis , που είναι ιθαγενές στην Ευρώπη και την Ασία και το Platanus occidentalis που είναι ιθαγενές στη Βόρεια Αμερική.',
                bibliography:"Tsopelas, P., Santini, A., Wingfield, M. J., & Wilhelm de Beer, Z. (2017). Canker Stain: A Lethal Disease Destroying Iconic Plane Trees. Plant Disease, 101(5), 645–658. https://doi.org/10.1094/pdis-09-16-1235-fe",
            },        
        },

        {
            question: 'Γιατί τον πλάτανο;',
            answer: {
                text: 'Είναι ένα είδος με πολυδιάστατη αξία. Οικολογικά, αποτελεί θεμέλιο στοιχείο των παρόχθιων οικοσυστημάτων και των αστικών κέντρων, καθώς σταθεροποιεί το έδαφος κατά μήκος των ποταμών και προσφέρει καταφύγιο σε πολυάριθμους οργανισμούς. Ταυτόχρονα, στέκεται ως ζωντανό σύμβολο της ιστορίας και του πολιτισμού· άλλοτε τόπος φιλοσοφικής διδασκαλίας και αργότερα χώρος συνάντησης για τις κοινότητες στις πλατείες. Σήμερα, παραμένει κομμάτι της ταυτότητας πολλών χωριών, τοπικών καταστημάτων, παραδόσεων και εορτών, που συνδέουν τη φύση με τον άνθρωπο και το παρελθόν με το παρόν.',
                bibliography:'Gratani, L., & Varone, L. (2007). Plant crown traits and carbon sequestration capability by Platanus hybrida Brot. in Rome. Landscape and Urban Planning, 81(4), 282–286. https://doi.org/10.1016/j.landurbplan.2007.01.006. Stara, K., & Tsiakiris, R. (2019). Oriental Planes Platanus orientalis L. and Other Monumental Trees in Central Squares and Churchyards in NW Greece: Sacred, Emblematic and Threatened. Acta Horticulturae Et Regiotecturae, 22(1), 14–18. https://doi.org/10.2478/ahr-2019-0003',
            },        
        },

        {
            question: 'Τι είναι οι φυτοπαθογόνοι μύκητες',
            answer: {
                text: 'Είναι μύκητες που προκαλούν ασθένειες στα φυτά. Ανήκουν κυρίως στους Ασκομύκητες και τους Βασιδιομύκητες και μπορούν να εισβάλουν στα φυτά με τις εξειδικευμένες δομές τους, τα ένζυμα και τους παράγοντες λοιμογόνου δράσης. Ο εχθρός μας, ο Ceratocystis platani, είναι Ασκομύκητας που προσβάλλει τα πλατάνια, προκαλώντας την ασθένεια του έλκους του φλοιού. Εισέρχεται στο δέντρο μέσω τραυμάτων του φλοιού, όπου πολλαπλασιάζεται, παράγει μια τοξίνη γνωστή ως κερατοπλατανίνη και τελικά προκαλεί νέκρωση των ιστών.',
                bibliography: 'Panconesi, A., Moricca, S., Dellavalle, I., & Torraca, G. (2003). The epidemiology of canker stain of Plane tree and its spread from urban plantings to spontaneous groves and natural forests. In Second International Symposium on Plant Health in Urban Horticulture (pp. 84-91). Berlin. Sharma, I. Phytopathogenic Fungi and Their Biocontrol Applications. In Fungi Bio-Prospects in Sustainable Agriculture, Environment and Nano-Technology, Volume 1: Fungal Diversity of Sustainable Agriculture; Sharma, V.K., Shah, M.P., Parmar, S., Kumar, A., Eds.; Academic Press: Cambridge, MA, USA, 2021; Volume 1, pp. 155–188. ISBN 9780128213940.  Tsopelas, P., & Soulioti, N. (2010). The expansion of the fungus Ceratocystis platani in the Greek area: A threat to the natural sycamore ecosystems. Agriculture - Livestock, Issue 7/2010, 56-60.',
            },        
        },
    
    ],

    en: [
            {
                question: 'What is a plane tree?',
                answer: {
                    text:'A plane tree, or platane, is a large, long-lived deciduous tree with a broad crown that provides generous shade',
                    bibliography:"'Platanus orientalis' from the website Trees and Shrubs Online (treesandshrubsonline.org/articles/platanus/platanus-orientalis/). Accessed 2025-08-17.",
                },
            },
        {
            question: 'Where do they grow?',
            answer: {
                text:'Two main species are Platanus orientalis, native to Europe and Asia, and Platanus occidentalis, native to North America. ',
                bibliography:"Tsopelas, P., Santini, A., Wingfield, M. J., & Wilhelm de Beer, Z. (2017). Canker Stain: A Lethal Disease Destroying Iconic Plane Trees. Plant Disease, 101(5), 645–658. https://doi.org/10.1094/pdis-09-16-1235-fe",
            },        
        },

        {
            question: 'Why plane tree?',
            answer: {
                text:'It is a species of multifaceted value. Ecologically, it forms a cornerstone of riparian ecosystems, in urban centers, stabilizing soil along rivers and offering shelter for numerous organisms. At the same time, it stands as a living symbol of history and culture; once serving as a site for philosophical teaching and later as a gathering place for communities in squares. Today, it remains part of the identity of mane villages, local stores, traditions and festivals, which connects nature with people and the past with the present.',
                bibliography:'Gratani, L., & Varone, L. (2007). Plant crown traits and carbon sequestration capability by Platanus hybrida Brot. in Rome. Landscape and Urban Planning, 81(4), 282–286. https://doi.org/10.1016/j.landurbplan.2007.01.006. Stara, K., & Tsiakiris, R. (2019). Oriental Planes Platanus orientalis L. and Other Monumental Trees in Central Squares and Churchyards in NW Greece: Sacred, Emblematic and Threatened. Acta Horticulturae Et Regiotecturae, 22(1), 14–18. https://doi.org/10.2478/ahr-2019-0003',
            },        
        },

        {
            question: 'What are phytopathogenic fungi?',
            answer: {
                text:'They are fungi that cause disease in plants. They belong mainly to the Ascomycetes and Basidiomycetes, and can invade plants with their specialized structures. enzymes and virulence factors. Our enemy, Ceratocystis platani, is an Ascomycetes that attacks plane trees, causing Canker Stain Disease. It enters the tree through bark injuries, where it proliferates, produces a toxin known as ceratoplatanin and ultimately causes tissue necrosis.',
                bibliography: 'Panconesi, A., Moricca, S., Dellavalle, I., & Torraca, G. (2003). The epidemiology of canker stain of Plane tree and its spread from urban plantings to spontaneous groves and natural forests. In Second International Symposium on Plant Health in Urban Horticulture (pp. 84-91). Berlin. Sharma, I. Phytopathogenic Fungi and Their Biocontrol Applications. In Fungi Bio-Prospects in Sustainable Agriculture, Environment and Nano-Technology, Volume 1: Fungal Diversity of Sustainable Agriculture; Sharma, V.K., Shah, M.P., Parmar, S., Kumar, A., Eds.; Academic Press: Cambridge, MA, USA, 2021; Volume 1, pp. 155–188. ISBN 9780128213940.  Tsopelas, P., & Soulioti, N. (2010). The expansion of the fungus Ceratocystis platani in the Greek area: A threat to the natural sycamore ecosystems. Agriculture - Livestock, Issue 7/2010, 56-60.',
            },        
        },
    ],
};

const ChatBot: React.FC = () => {
    const[isOpen, setIsOpen] = useState(false);
    const[selectedAnswer, setSelectedAnswer] = useState<FAQItem["answer"] | null>(null);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const [language, setLanguage] = useState<'gr' | 'en'>('gr'); //for selecting a language
    const toggleChat = () => {
        setIsOpen(!isOpen);
        setSelectedAnswer(null);
        setSelectedIndex(null);
    };

    const faqList = faqData[language];

    return(
        <div>
            {/*Floating Button*/}
            <button className="chatButton" onClick={toggleChat}>
                <img 
                    src='https://static.igem.wiki/teams/5684/wikipics/fairy-robot.webp'
                    alt = 'fairy-robot'
                    className='chat-icon'
                />
            </button>

            {/*Chat Window*/}
            {isOpen && (
                <div className = "chatWindow">
                    <div className='languageToggle'>
                        <button
                            className={language === 'gr' ? 'activeLang' : ''}
                            onClick={()=>setLanguage('gr')}
                            >
                                <img src = "https://static.igem.wiki/teams/5684/wikipics/gr-language.webp" alt="Greek Language" className='langFlag' />
                        </button>
                        <button
                            className={language === 'en' ? 'activeLang' : ''}
                            onClick={()=>setLanguage('en')}
                            >
                                <img src = "https://static.igem.wiki/teams/5684/wikipics/en-language.webp" alt="English Language" className='langFlag' />
                        </button>
                    </div>

                    <h4 className="chatTitle">
                        {language === 'gr' ? 'Διάλεξε μια ερώτηση' : 'Select a question'}
                    </h4>

                    {faqList.map((item,index) => (
                        <button
                            key={index}
                            className={`questionButton ${selectedIndex === index ? 'selected' : ''}`}                            onClick={() => {
                                setSelectedAnswer(item.answer);
                                setSelectedIndex(index);
                            }}
                        >
                            {item.question}
                        </button>
                    ))}
                    {selectedAnswer && (
                        <div className="answerBox">
                            <strong>{language === 'gr' ? 'Απάντηση:' : 'Answer'}</strong>
                            {selectedAnswer && (
                                <div className='mt-4'> {/*(mt-4) tailwind.css = margin-top: 1rem*/}
                                    <p>{selectedAnswer.text}</p>
                                    {selectedAnswer.bibliography && (
                                        <p className='bibliography'>{selectedAnswer.bibliography}</p>
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default ChatBot;