function getDesigns(){
    var result = [];
    for (let _=1; _<9; _++){
        let object = {
            id: _-1,
            source: "/static/images/"+_+".jpg",
            label: "Design"+_+new Date()
        };
        result.push(object);
    }
    return result;
}

let app = new Vue({
    el: "#app",
    data(){
        return {
            theme: new Color(localStorage.getItem("theme")),
            buttonSize: 40,
            designDummyData: getDesigns()
        }
    },
    methods: {
        switchTheme(){
            this.theme.theme = (this.theme.theme==="light") ? "dark" : "light";
            localStorage.setItem("theme", this.theme.theme)
        }
    }
});