import {addManyPricesAction} from "../store/getPricesReducer";

export const fetchPrices = () => {
    console.log("нажали фетч")
    return function (dispatch) {
        fetch('https://script.googleusercontent.com/macros/echo?user_content_key=wLSQSatR6bZv9i8U5VtiOsa7GMSDGnnZijrnGFZE1_jwd1QJkdBz8Sl8ITa_TvVjVpf_ByOh6IcFuOZ7evsUSo_9NYtdFJYTm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnDbwAl7CMxVAiYx-XcQGm2-pK98VFRlg2L1Bgi9-N5lGP8ipd0KGqDVV0UksueULwVpami56uyJ4IxkRYgJm5B_wls8-MAHEtdz9Jw9Md8uu&lib=MKqsPpMpIdvM_NE9JC918gzq7P1CHZY8E')
            .then(response => response.json())
            .then(json => {

                let x = 1
                let data = [];
                json.forEach(e => {
                    if(e[0] === ''){
                        x=1
                    }
                    else {
                        if(x === 1){
                            data.push({
                                name: e[0],
                                variants: []
                            })
                            x = 0
                        }
                        else {
                            data[data.length-1].variants.push(e)
                        }
                    }
                })
                console.log(data)
                dispatch(addManyPricesAction(data))
            })
    }
}