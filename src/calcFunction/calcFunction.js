import Option from "../filesettings/thisFileSettings/digitalFileSettings/digitalSettingsValues/Option";
import React from "react";

export function calcPrintingPrice(file, prices) {

    let priceCount = 1
    if(file.count > 10 && file.count < 51){
        priceCount = 2
    }
    if(file.count > 50 && file.count < 101){
        priceCount = 3
    }
    if(file.count > 100){
        priceCount = 4
    }

    const blackWhiteD = prices[3].variants
    const colorOneSideDA4 = prices[4].variants
    const colorTwoSideDA4 = prices[5].variants
    const colorOneSideDA3 = prices[6].variants
    const colorTwoSideDA3 = prices[7].variants

    if(file.format === "А4" && file.sides === "одна" && file.color === "чорно-білий"){
        let t = 0;
        blackWhiteD.forEach(e => {
            if(e[0] === file.destiny){
                t = e[priceCount]*file.count
            }
        })
        return t
    }
    if(file.format === "А4" && file.sides === "одна" && file.color === "кольоровий"){
        let t = 0;
        colorOneSideDA4.forEach(e => {
            if(e[0] === file.destiny){
                t = e[priceCount]*file.count
            }
        })
        return t
    }
    if(file.format === "А4" && file.sides === "дві" && file.color === "кольоровий"){
        let t = 0;
        colorTwoSideDA4.forEach(e => {
            if(e[0] === file.destiny){
                t = e[priceCount]*file.count
            }
        })
        return t
    }
    if(file.format === "А3" && file.sides === "одна" && file.color === "кольоровий"){
        let t = 0;
        colorOneSideDA3.forEach(e => {
            if(e[0] === file.destiny){
                t = e[priceCount]*file.count
            }
        })
        return t
    }
    if(file.format === "А3" && file.sides === "дві" && file.color === "кольоровий"){
        let t = 0;
        colorTwoSideDA3.forEach(e => {
            if(e[0] === file.destiny){
                t = e[priceCount]*file.count
            }
        })
        return t
    }
}