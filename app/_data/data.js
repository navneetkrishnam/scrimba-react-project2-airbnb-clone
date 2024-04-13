import experienceOneImage from '../_assets/images/katie-zaferes.png'
import experienceTwoImage from '../_assets/images/wedding-photography.png'
import experienceThreeImage from '../_assets/images/mountain-bike.png'

export const experiencesList = [
    {
        experienceId: 1,
        experienceImage: experienceOneImage,
        experienceStats: {
            experienceRating: '5.0',
            experienceReviewCount: '6'
        },
        experienceLocation: 'ONLINE',
        experienceTitle: 'Life lessons with Katie Zaferes',
        experiencePrice: '136',
        experienceCurrency: '$',
        experienceUnit: 'person',
        experienceSpots: 3
    },
    {
        experienceId: 2,
        experienceImage: experienceTwoImage,
        experienceStats: {
            experienceRating: '5.0',
            experienceReviewCount: '30'
        },
        experienceLocation: 'ONLINE',
        experienceTitle: 'Learn wedding photography',
        experiencePrice: '150',
        experienceCurrency: '$',
        experienceUnit: 'person',
        experienceSpots: 0
    },
    {
        experienceId: 3,
        experienceImage: experienceThreeImage,
        experienceStats: {
            experienceRating: '4.8',
            experienceReviewCount: '2'
        },
        experienceLocation: 'USA',
        experienceTitle: 'Group mountain bike riding',
        experiencePrice: '48',
        experienceCurrency: '$',
        experienceUnit: 'person',
        experienceSpots: 10
    }
]