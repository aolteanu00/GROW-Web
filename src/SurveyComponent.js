import React from "react";
import { StylesManager, Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/modern.css";
import "./index.css";
import { json } from "./json"

var defaultThemeColors = StylesManager.ThemeColors["modern"];
defaultThemeColors["$main-color"] = "red";
defaultThemeColors["$main-hover-color"] = "white";
defaultThemeColors["$text-color"] = "white";
defaultThemeColors["$header-color"] = "red";
defaultThemeColors["$header-background-color"] = "white";
defaultThemeColors["$body-container-background-color"] = "rgb(255, 255, 255, 0)";
StylesManager.applyTheme("modern");

function SurveyComponent() {
    const survey = new Model(json);
    survey.onComplete.add(function (result) {
        console.log(result.data);
        
        // Store the data we just logged in a variable
        const data = result.data;
        const data2 = result.data;
    });
    return (<Survey model={survey} />);
}
export default SurveyComponent;
// 

