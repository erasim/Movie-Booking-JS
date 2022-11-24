export const database = [
    { name: 'Kuch kuch hota hai', imgUrl: 'https://m.media-amazon.com/images/M/MV5BNGNhNWMwNTgtZmNlOS00OGM3LWIxYzItOWQwZDJjMzQ3MzRlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg' },
    { name: '3 Idiots', imgUrl: 'https://grazia.wwmindia.com/content/2017/may/3_idiotsweb_resizing_1493899542.jpg' },
    { name: 'Humgama', imgUrl: 'http://timesofindia.indiatimes.com/photo/61329946.cms' },
    { name: 'KGF chapter 2', imgUrl: 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/de4f1f9bfb6e740459e7bd8da955aa0b70191e780c1f1347ce73248d3ceda8f4._RI_V_TTW_.jpg' },
    { name: 'OUIJA', imgUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/oija-1658244471.jpeg?crop=1xw:0.6666666666666666xh;center,top&resize=480:*' }
]
export const availibility = {
    'Kuch kuch hota hai': [1, 2, 5, 8, 9,19,22,20,11],
    '3 Idiots': [1, 2, 3, 5, 6,10,11,12,13,14,15,16,17, 24],
    'Humgama': [1, 2, 3, 4, 5, 6,15,16,17,18,19,20,21,22,23,24],
    'KGF chapter 2': [4, 6, 8,10,11,12,13,14,15,16],
    'OUIJA': [3, 5, 7, 9,20,21,12,13,19,24]
}
const fetchMovieList = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(database)
        }, 500)
    })
}

const fetchMovieAvailability = async (movieName) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            for (const m in availibility) {
                if (m === movieName) resolve(availibility[m])
            }
            resolve([])
        }, 500)
    })
}

export { fetchMovieList, fetchMovieAvailability }
// asim
