import axios from 'axios';
import mockAdapter from 'axios-mock-adapter';

const mock = new mockAdapter(axios);

mock.onGet("/products").reply(200, {
    products: [
        {
          "name": "VESTIDO TRANSPASSE BOW",
          "style": "20002605",
          "code_color": "20002605_613",
          "color_slug": "tapecaria",
          "color": "TAPEÇARIA",
          "on_sale": false,
          "regular_price": "R$ 199,90",
          "actual_price": "R$ 199,90",
          "discount_percentage": "",
          "installments": "3x R$ 66,63",
          "image": "https://viniciusvinna.netlify.app/assets/api-fashionista/20002605_615_catalog_1.jpg",
          "sizes": [
            {
              "available": false,
              "size": "PP",
              "sku": "5807_343_0_PP"
            },
            {
              "available": true,
              "size": "P",
              "sku": "5807_343_0_P"
            },
            {
              "available": true,
              "size": "M",
              "sku": "5807_343_0_M"
            },
            {
              "available": true,
              "size": "G",
              "sku": "5807_343_0_G"
            },
            {
              "available": false,
              "size": "GG",
              "sku": "5807_343_0_GG"
            }
          ]
        },
        {
          "name": "REGATA ALCINHA FOLK",
          "style": "20002570",
          "code_color": "20002570_614",
          "color_slug": "preto",
          "color": "PRETO",
          "on_sale": false,
          "regular_price": "R$ 99,90",
          "actual_price": "R$ 99,90",
          "discount_percentage": "",
          "installments": "3x R$ 33,30",
          "image": "https://viniciusvinna.netlify.app/assets/api-fashionista/20002570_002_catalog_1.jpg",
          "sizes": [
            {
              "available": true,
              "size": "PP",
              "sku": "5723_40130843_0_PP"
            },
            {
              "available": true,
              "size": "P",
              "sku": "5723_40130843_0_P"
            },
            {
              "available": true,
              "size": "M",
              "sku": "5723_40130843_0_M"
            },
            {
              "available": true,
              "size": "G",
              "sku": "5723_40130843_0_G"
            },
            {
              "available": true,
              "size": "GG",
              "sku": "5723_40130843_0_GG"
            }
          ]
        },
        {
          "name": "TOP CROPPED SUEDE",
          "style": "20002575",
          "code_color": "20002575_035",
          "color_slug": "caramelo",
          "color": "CARAMELO",
          "on_sale": false,
          "regular_price": "R$ 129,90",
          "actual_price": "R$ 129,90",
          "discount_percentage": "",
          "installments": "3x R$ 43,30",
          "image": "https://viniciusvinna.netlify.app/assets/api-fashionista/20002575_027_catalog_1.jpg",
          "sizes": [
            {
              "available": false,
              "size": "PP",
              "sku": "5733_1000054_0_PP"
            },
            {
              "available": true,
              "size": "P",
              "sku": "5733_1000054_0_P"
            },
            {
              "available": true,
              "size": "M",
              "sku": "5733_1000054_0_M"
            },
            {
              "available": true,
              "size": "G",
              "sku": "5733_1000054_0_G"
            },
            {
              "available": false,
              "size": "GG",
              "sku": "5733_1000054_0_GG"
            }
          ]
        },
        {
          "name": "BATA DECOTE FLUID",
          "style": "20002581",
          "code_color": "20002581_614",
          "color_slug": "mini-folk",
          "color": "MINI FOLK",
          "on_sale": false,
          "regular_price": "R$ 149,90",
          "actual_price": "R$ 149,90",
          "discount_percentage": "",
          "installments": "3x R$ 49,97",
          "image": "https://viniciusvinna.netlify.app/assets/api-fashionista/20002581_614_catalog_1.jpg",
          "sizes": [
            {
              "available": false,
              "size": "PP",
              "sku": "5749_341_0_PP"
            },
            {
              "available": true,
              "size": "P",
              "sku": "5749_341_0_P"
            },
            {
              "available": false,
              "size": "M",
              "sku": "5749_341_0_M"
            },
            {
              "available": true,
              "size": "G",
              "sku": "5749_341_0_G"
            },
            {
              "available": true,
              "size": "GG",
              "sku": "5749_341_0_GG"
            }
          ]
        },
        {
          "name": "T-SHIRT LEATHER DULL",
          "style": "20002602",
          "code_color": "20002602_027",
          "color_slug": "marinho",
          "color": "MARINHO",
          "on_sale": true,
          "regular_price": "R$ 139,90",
          "actual_price": "R$ 119,90",
          "discount_percentage": "12%",
          "installments": "3x R$ 39,97",
          "image": "",
          "sizes": [
            {
              "available": true,
              "size": "PP",
              "sku": "5793_1000032_0_PP"
            },
            {
              "available": true,
              "size": "P",
              "sku": "5793_1000032_0_P"
            },
            {
              "available": true,
              "size": "M",
              "sku": "5793_1000032_0_M"
            },
            {
              "available": false,
              "size": "G",
              "sku": "5793_1000032_0_G"
            },
            {
              "available": false,
              "size": "GG",
              "sku": "5793_1000032_0_GG"
            }
          ]
        },
        {
          "name": "CAMISA SUEDE SPAN",
          "style": "20002584",
          "code_color": "20002584_027",
          "color_slug": "burgundy",
          "color": "BURGUNDY",
          "on_sale": false,
          "regular_price": "R$ 189,90",
          "actual_price": "R$ 189,90",
          "discount_percentage": "",
          "installments": "3x R$ 63,30",
          "image": "https://viniciusvinna.netlify.app/assets/api-fashionista/20002584_035_catalog_1.jpg",
          "sizes": [
            {
              "available": false,
              "size": "PP",
              "sku": "5755_1000070_0_PP"
            },
            {
              "available": true,
              "size": "P",
              "sku": "5755_1000070_0_P"
            },
            {
              "available": true,
              "size": "M",
              "sku": "5755_1000070_0_M"
            },
            {
              "available": false,
              "size": "G",
              "sku": "5755_1000070_0_G"
            },
            {
              "available": false,
              "size": "GG",
              "sku": "5755_1000070_0_GG"
            }
          ]
        },
        {
          "name": "CALÇA CLASSIC PRINT",
          "style": "20002634",
          "code_color": "20002634_613",
          "color_slug": "free-dots",
          "color": "FREE DOTS",
          "on_sale": false,
          "regular_price": "R$ 159,90",
          "actual_price": "R$ 159,90",
          "discount_percentage": "",
          "installments": "3x R$ 53,30",
          "image": "https://viniciusvinna.netlify.app/assets/api-fashionista/20002634_613_catalog_1.jpg",
          "sizes": [
            {
              "available": true,
              "size": "36",
              "sku": "5865_339_0_36"
            },
            {
              "available": true,
              "size": "38",
              "sku": "5865_339_0_38"
            },
            {
              "available": true,
              "size": "40",
              "sku": "5865_339_0_40"
            },
            {
              "available": true,
              "size": "42",
              "sku": "5865_339_0_42"
            },
            {
              "available": true,
              "size": "44",
              "sku": "5865_339_0_44"
            }
          ]
        },
        {
          "name": "REGATA ALCINHA FOLK",
          "style": "20002570",
          "code_color": "20002570_612",
          "color_slug": "off-white",
          "color": "OFF WHITE",
          "on_sale": false,
          "regular_price": "R$ 99,90",
          "actual_price": "R$ 99,90",
          "discount_percentage": "",
          "installments": "3x R$ 33,30",
          "image": "https://viniciusvinna.netlify.app/assets/api-fashionista/20002570_029_catalog_1.jpg",
          "sizes": [
            {
              "available": true,
              "size": "PP",
              "sku": "5723_1000058_0_PP"
            },
            {
              "available": false,
              "size": "P",
              "sku": "5723_1000058_0_P"
            },
            {
              "available": true,
              "size": "M",
              "sku": "5723_1000058_0_M"
            },
            {
              "available": true,
              "size": "G",
              "sku": "5723_1000058_0_G"
            },
            {
              "available": true,
              "size": "GG",
              "sku": "5723_1000058_0_GG"
            }
          ]
        },
        {
          "name": "MACAQUINHO ALFAIATARIA PEACE",
          "style": "20002612",
          "code_color": "20002612_612",
          "color_slug": "floral-red",
          "color": "FLORAL RED",
          "on_sale": false,
          "regular_price": "R$ 149,90",
          "actual_price": "R$ 149,90",
          "discount_percentage": "",
          "installments": "3x R$ 49,97",
          "image": "https://viniciusvinna.netlify.app/assets/api-fashionista/20002612_612_catalog_1.jpg",
          "sizes": [
            {
              "available": false,
              "size": "PP",
              "sku": "5819_337_0_PP"
            },
            {
              "available": true,
              "size": "P",
              "sku": "5819_337_0_P"
            },
            {
              "available": true,
              "size": "M",
              "sku": "5819_337_0_M"
            },
            {
              "available": false,
              "size": "G",
              "sku": "5819_337_0_G"
            },
            {
              "available": false,
              "size": "GG",
              "sku": "5819_337_0_GG"
            }
          ]
        },
        {
          "name": "BOLSA FLAP TRIANGLE",
          "style": "20002945",
          "code_color": "20002945_027",
          "color_slug": "caramelo",
          "color": "CARAMELO",
          "on_sale": true,
          "regular_price": "R$ 199,90",
          "actual_price": "R$ 159,90",
          "discount_percentage": "25%",
          "installments": "3x R$ 53,30",
          "image": "https://viniciusvinna.netlify.app/assets/api-fashionista/20002945_027_catalog_1.jpg",
          "sizes": [
            {
              "available": true,
              "size": "U",
              "sku": "6559_1000054_0_U"
            }
          ]
        },
        {
          "name": "VESTIDO LONGO FLOAT",
          "style": "20002606",
          "code_color": "20002606_612",
          "color_slug": "tapecaria",
          "color": "TAPEÇARIA",
          "on_sale": false,
          "regular_price": "R$ 219,90",
          "actual_price": "R$ 219,90",
          "discount_percentage": "",
          "installments": "3x R$ 73,30",
          "image": "https://viniciusvinna.netlify.app/assets/api-fashionista/20002606_615_catalog_1.jpg",
          "sizes": [
            {
              "available": true,
              "size": "PP",
              "sku": "5811_343_0_PP"
            },
            {
              "available": false,
              "size": "P",
              "sku": "5811_343_0_P"
            },
            {
              "available": true,
              "size": "M",
              "sku": "5811_343_0_M"
            },
            {
              "available": true,
              "size": "G",
              "sku": "5811_343_0_G"
            },
            {
              "available": false,
              "size": "GG",
              "sku": "5811_343_0_GG"
            }
          ]
        },
        {
          "name": "BATA DECOTE FLUID",
          "style": "20002581",
          "code_color": "20002581_612",
          "color_slug": "bohemian-preto",
          "color": "BOHEMIAN PRETO",
          "on_sale": false,
          "regular_price": "R$ 149,90",
          "actual_price": "R$ 149,90",
          "discount_percentage": "",
          "installments": "3x R$ 49,97",
          "image": "https://viniciusvinna.netlify.app/assets/api-fashionista/20002581_611_catalog_1.jpg",
          "sizes": [
            {
              "available": false,
              "size": "PP",
              "sku": "5749_333_0_PP"
            },
            {
              "available": true,
              "size": "P",
              "sku": "5749_333_0_P"
            },
            {
              "available": true,
              "size": "M",
              "sku": "5749_333_0_M"
            },
            {
              "available": true,
              "size": "G",
              "sku": "5749_333_0_G"
            },
            {
              "available": false,
              "size": "GG",
              "sku": "5749_333_0_GG"
            }
          ]
        },
        {
          "name": "VESTIDO FRANZIDO RECORTES",
          "style": "20001609",
          "code_color": "20001609_029",
          "color_slug": "preto",
          "color": "PRETO",
          "on_sale": true,
          "regular_price": "R$ 139,90",
          "actual_price": "R$ 69,90",
          "discount_percentage": "50%",
          "installments": "2x R$ 34,95",
          "image": "https://viniciusvinna.netlify.app/assets/api-fashionista/20001609_002_catalog_1.jpg",
          "sizes": [
            {
              "available": true,
              "size": "PP",
              "sku": "3627_40130843_0_PP"
            },
            {
              "available": true,
              "size": "P",
              "sku": "3627_40130843_0_P"
            },
            {
              "available": true,
              "size": "M",
              "sku": "3627_40130843_0_M"
            },
            {
              "available": false,
              "size": "G",
              "sku": "3627_40130843_0_G"
            },
            {
              "available": false,
              "size": "GG",
              "sku": "3627_40130843_0_GG"
            }
          ]
        },
        {
          "name": "CALÇA COMFORT TASSEL",
          "style": "20001786",
          "code_color": "20001786_594",
          "color_slug": "paisley-gipsy-azul",
          "color": "PAISLEY GIPSY AZUL",
          "on_sale": true,
          "regular_price": "R$ 139,90",
          "actual_price": "R$ 84,90",
          "discount_percentage": "39%",
          "installments": "2x R$ 42,45",
          "image": "https://viniciusvinna.netlify.app/assets/api-fashionista/20001786_594_catalog_1.jpg",
          "sizes": [
            {
              "available": true,
              "size": "36",
              "sku": "4029_259_0_36"
            },
            {
              "available": true,
              "size": "38",
              "sku": "4029_259_0_38"
            },
            {
              "available": true,
              "size": "40",
              "sku": "4029_259_0_40"
            },
            {
              "available": true,
              "size": "42",
              "sku": "4029_259_0_42"
            },
            {
              "available": false,
              "size": "44",
              "sku": "4029_259_0_44"
            }
          ]
        },
        {
          "name": "SAIA DENIM BOTÕES",
          "style": "20001695",
          "code_color": "20001695_063",
          "color_slug": "indigo-escuro",
          "color": "INDIGO ESCURO",
          "on_sale": true,
          "regular_price": "R$ 139,90",
          "actual_price": "R$ 69,90",
          "discount_percentage": "50%",
          "installments": "2x R$ 34,95",
          "image": "https://viniciusvinna.netlify.app/assets/api-fashionista/20001695_063_catalog_1.jpg",
          "sizes": [
            {
              "available": false,
              "size": "36",
              "sku": "3787_233_0_36"
            },
            {
              "available": true,
              "size": "38",
              "sku": "3787_233_0_38"
            },
            {
              "available": true,
              "size": "40",
              "sku": "3787_233_0_40"
            },
            {
              "available": true,
              "size": "42",
              "sku": "3787_233_0_42"
            },
            {
              "available": false,
              "size": "44",
              "sku": "3787_233_0_44"
            }
          ]
        },
        {
          "name": "BLUSA LAÇO ISTAMBUL",
          "style": "20002600",
          "code_color": "20002600_293",
          "color_slug": "laranja-queimado",
          "color": "LARANJA QUEIMADO",
          "on_sale": false,
          "regular_price": "R$ 149,90",
          "actual_price": "R$ 149,90",
          "discount_percentage": "",
          "installments": "3x R$ 49,97",
          "image": "https://viniciusvinna.netlify.app/assets/api-fashionista/20002600_293_catalog_1.jpg",
          "sizes": [
            {
              "available": true,
              "size": "PP",
              "sku": "5789_311_0_PP"
            },
            {
              "available": true,
              "size": "P",
              "sku": "5789_311_0_P"
            },
            {
              "available": true,
              "size": "M",
              "sku": "5789_311_0_M"
            },
            {
              "available": false,
              "size": "G",
              "sku": "5789_311_0_G"
            },
            {
              "available": false,
              "size": "GG",
              "sku": "5789_311_0_GG"
            }
          ]
        },
        {
          "name": "BLUSA RIB STRIPES",
          "style": "20002829",
          "code_color": "20002829_006",
          "color_slug": "bege",
          "color": "BEGE",
          "on_sale": false,
          "regular_price": "R$ 149,90",
          "actual_price": "R$ 149,90",
          "discount_percentage": "",
          "installments": "3x R$ 49,97",
          "image": "https://viniciusvinna.netlify.app/assets/api-fashionista/20002829_006_catalog_1.jpg",
          "sizes": [
            {
              "available": false,
              "size": "PP",
              "sku": "6299_1000012_0_PP"
            },
            {
              "available": true,
              "size": "P",
              "sku": "6299_1000012_0_P"
            },
            {
              "available": true,
              "size": "M",
              "sku": "6299_1000012_0_M"
            },
            {
              "available": true,
              "size": "G",
              "sku": "6299_1000012_0_G"
            },
            {
              "available": true,
              "size": "GG",
              "sku": "6299_1000012_0_GG"
            }
          ]
        },
        {
          "name": "CASACO WHITE FUR",
          "style": "20002648",
          "code_color": "20002648_029",
          "color_slug": "off-white",
          "color": "OFF-WHITE",
          "on_sale": false,
          "regular_price": "R$ 239,90",
          "actual_price": "R$ 239,90",
          "discount_percentage": "",
          "installments": "3x R$ 79,97",
          "image": "https://viniciusvinna.netlify.app/assets/api-fashionista/20002648_029_catalog_1.jpg",
          "sizes": [
            {
              "available": false,
              "size": "PP",
              "sku": "5891_1000058_0_PP"
            },
            {
              "available": true,
              "size": "P",
              "sku": "5891_1000058_0_P"
            },
            {
              "available": true,
              "size": "M",
              "sku": "5891_1000058_0_M"
            },
            {
              "available": true,
              "size": "G",
              "sku": "5891_1000058_0_G"
            },
            {
              "available": false,
              "size": "GG",
              "sku": "5891_1000058_0_GG"
            }
          ]
        },
        {
          "name": "VESTIDO CURTO FESTIVAL",
          "style": "20001684",
          "code_color": "20001684_587",
          "color_slug": "floral-vintage-vermelho",
          "color": "FLORAL VINTAGE VERMELHO",
          "on_sale": true,
          "regular_price": "R$ 129,90",
          "actual_price": "R$ 59,90",
          "discount_percentage": "54%",
          "installments": "1x R$ 59,90",
          "image": "https://viniciusvinna.netlify.app/assets/api-fashionista/20001684_585_catalog_1.jpg",
          "sizes": [
            {
              "available": false,
              "size": "PP",
              "sku": "3765_211_0_PP"
            },
            {
              "available": false,
              "size": "P",
              "sku": "3765_211_0_P"
            },
            {
              "available": false,
              "size": "M",
              "sku": "3765_211_0_M"
            },
            {
              "available": false,
              "size": "G",
              "sku": "3765_211_0_G"
            },
            {
              "available": true,
              "size": "GG",
              "sku": "3765_211_0_GG"
            }
          ]
        },
        {
          "name": "ÓCULOS DE SOL BOLD",
          "style": "20001882",
          "code_color": "20001882_008",
          "color_slug": "marrom",
          "color": "MARRROM",
          "on_sale": true,
          "regular_price": "R$ 109,90",
          "actual_price": "R$ 49,90",
          "discount_percentage": "55%",
          "installments": "1x R$ 49,90",
          "image": "https://viniciusvinna.netlify.app/assets/api-fashionista/20001882_008_catalog_1.jpg",
          "sizes": [
            {
              "available": true,
              "size": "U",
              "sku": "4229_1000016_0_U"
            }
          ]
        },
        {
          "name": "ÓCULOS DE SOL AVIADOR VINTAGE",
          "style": "20001883",
          "code_color": "20001883_019",
          "color_slug": "cinza",
          "color": "CINZA",
          "on_sale": true,
          "regular_price": "R$ 109,90",
          "actual_price": "R$ 49,90",
          "discount_percentage": "55%",
          "installments": "1x R$ 49,90",
          "image": "https://viniciusvinna.netlify.app/assets/api-fashionista/20001883_019_catalog_1.jpg",
          "sizes": [
            {
              "available": true,
              "size": "U",
              "sku": "4231_1000038_0_U"
            }
          ]
        },
        {
          "name": "PULSEIRA STYLISH",
          "style": "20001913",
          "code_color": "20001913_009",
          "color_slug": "dourado",
          "color": "dourado",
          "on_sale": false,
          "regular_price": "R$ 29,90",
          "actual_price": "R$ 29,90",
          "discount_percentage": "",
          "installments": "1x R$ 29,90",
          "image": "https://viniciusvinna.netlify.app/assets/api-fashionista/20001913_009_catalog_1.jpg",
          "sizes": [
            {
              "available": true,
              "size": "U",
              "sku": "4279_1000018_0_U"
            }
          ]
        }
      ]
      
})

axios.get("/products").then(response => {
    console.log(response)
})

// using a mock before creating an api

