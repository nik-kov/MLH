import field from "../data/helpers";

function inputValues4andClick (name, gender, age, storyType) {
    $(sel.name).setValue(data.name);
    $$(sel.radioBtn)[field.HE].click();
    $(sel.age).setValue(data.age);
    $(sel.dropdownSelections).click();
    $$(sel.dropdownStory)[field.comedy].click();
    $(sel.create).click();
}

module.exports = inputValues4andClick();