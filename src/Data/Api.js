import React,{ useEffect } from 'react'


export const api = 
      {
        cover: {
          full_test_name: "Test1",
          short_test_name: "Mini Test",
        },
        user_data: {
          fname: "Sumer",
          lname: "Bhadra",
          name: "Sumer Bhadra",
          date: "20 Dec, 2022",
          footer_date: "Dec 20, 2022",
          age: 26,
        },
        results: {
          amh: {
            color: "#64BE45",
            status: "Optimal",
            insight:
              "This means: your AMH levels indicate that you have the average number of eggs for your age. Yay!",
            value:4,
          },
          e2: {
            min: 20,
            max: 50,
            color: "#FF5C5C",
            status: "Below Average",
            insight: "Lorem ipsum dolor",
            value: 15,
          },
          fsh: {
            min: 2.5,
            max: 12,
            color: "#9837AA",
            status: "Above Average",
            insight:
              'A high FSH in isolation is not very concerning if your AMH level is "normal." We recommend getting tested again in 3 months. ',
            value: 19,
          },
          or: {
            key: "c",
          },
          nextsteps: 1,
        },
        lab_data: {
          companyname: "{Company Name}",
          orderid: 1008,
        },
      }

export const Miniapi =[
    {
        test : 'AMH',
        full_test_name : 'Anit-mullerian hormone',
        value : 4 ,
        vale_in : "ng/ml",
        status : 'Optimal',
    },
    {
        test : 'E2',
        full_test_name : 'Estradiol',
        value : 15 ,
        vale_in : "pg/ml",
        status : 'Below Average',
    },
    {
        test : 'FSH',
        full_test_name : 'Folllice-stimulating hormone',
        value : 19 ,
        vale_in : "mlU/ml",
        status : 'Above Average',
    },
]

export const DrList = [
  {
    name : 'Dr. Anne Thurium',
    url : "./asstes/d1.jpeg",
    rol : 'OB/GYN',
    detail : 'MBBS, MS – Obstetrics and Gynaecology, Fellowship in Minimal Access Surgery In Gynaecology'
  },
  {
    name : 'Dr. Laura Biding',
    url : "./asstes/d2.jpeg",
    rol : 'ENDOCRINOLOGIST',
    detail : 'M.B.B.S, Diplomate of the American Board in Internal Medicine, Endocrinology and Diabetes'
  },
  {
    name : 'Dr. Olive Yew',
    url : "./asstes/d3.jpeg",
    rol : 'INFERTILITY SPECIALIST',
    detail : 'MD - Obstetrics and Gynaecology, MBBS Gynecologist, Laparoscopic Surgeon (Obstetrics and Gynaecology)'
  },
  {
    name : 'Anna Domino',
    url : "./asstes/d4.jpeg",
    rol : 'NUTRITIONIST',
    detail : 'Registered associate nutritionist with the Association for Nutrition (AfN) and Diplome de Cuisine, Le Cordon Bleu.'
  }, 
]



