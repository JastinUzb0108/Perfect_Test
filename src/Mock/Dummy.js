import uuid from 'react-native-uuid';
import { Images } from 'Constants'

/**
 * Define and export the dummy data.
 */
export const Lessons = [
    {
        id: uuid.v4(),
        label: 'Range cource',
        name: 'RangeCoure',
        img: Images.categoryCource
    },
    {
        id: uuid.v4(),
        label: 'Reading',
        name: 'Reading',
        img: Images.grammary
    },
    {
        id: uuid.v4(),
        label: 'Listening',
        name: 'Listening',
        img: Images.listening
    },
    {
        id: uuid.v4(),
        label: 'Speaking',
        name: 'Speaking',
        img: Images.speacing
    },
    {
        id: uuid.v4(),
        label: 'Writing',
        name: 'Writing',
        img: Images.writing
    },
    {
        id: uuid.v4(),
        label: 'Grammary',
        name: 'Grammary',
        img: Images.grammar
    },
    {
        id: uuid.v4(),
        label: 'Check Writing',
        name: 'Check Writing',
        img: Images.repitions
    },
    {
        id: uuid.v4(),
        label: 'View Reating',
        name: 'View Reating',
        img: Images.reating
    }
]

export const GrammaryTest = [
    {
        id: uuid.v4(),
        answare: 'Could you tell me your surname?',
        variants: [
            {
                variant: 'Would you like me to spell it?'
            },
            {
                variant: 'Do you like my family name?'
            },
            {
                variant: 'How do I say that?'
            }
        ],
    },
    {
        id: uuid.v4(),
        answare: 'This plant looks dead',
        variants: [
            {
                variant: `It's in the garden`
            },
            {
                variant: 'It only needs some water'
            },
            {
                variant: `It's sleeping`
            }
        ],
    },
    {
        id: uuid.v4(),
        answare: 'I hope it doesnt rain',
        variants: [
            {
                variant: 'Of course not'
            },
            {
                variant: 'Will it be wet'
            },
            {
                variant: 'So do I'
            }
        ],
    },
    {
        id: uuid.v4(),
        answare: 'Are you going to come inside soon?',
        variants: [
            {
                variant: 'For ever'
            },
            {
                variant: 'Not long'
            },
            {
                variant: 'In a minute'
            }
        ],
    },
    {
        id: uuid.v4(),
        answare: 'Who gave you this book, Lucy',
        variants: [
            {
                variant: 'I bougth it.'
            },
            {
                variant: 'For my birthday'
            },
            {
                variant: 'My uncle was'
            }
        ],
    },
    {
        id: uuid.v4(),
        answare: 'Shall we go out for pizza tonight?',
        variants: [
            {
                variant: 'I know that'
            },
            {
                variant: `It's very good`
            },
            {
                variant: `I'm too tired`
            }
        ],
    },
    {
        id: uuid.v4(),
        answare: 'do you mind if I come too?',
        variants: [
            {
                variant: `That's fine`
            },
            {
                variant: `I'd like to`
            },
            {
                variant: `I don't know if I con`
            }
        ],
    },
]

const dummyData = { Lessons, GrammaryTest };

export default dummyData;
