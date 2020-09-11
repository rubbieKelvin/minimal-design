// workspace javascript

var el = document.getElementById('canvas-div');

const two = new Two({
    width: innerWidth*.7,
    height: innerHeight*.75
}).appendTo(el);

const controls = {
    main: "current"
};

const objects = [];

let app = new Vue({

    el: "#app",
    
    data(){
        return {
            theme: new Color(localStorage.getItem("theme")),
            buttonSize: 40,
            controls: controls,
            two: two,
            cursor: null,
            objects: objects
        }
    },

    computed: {
        canvasDivStyle(){
            return {
                boxShadow: "0px 0px 4px 4px rgba(76, 92, 96, 0.1)",
            }
        }
    },
    
    methods: {
        setCurrentControl(control){
            Object.keys(this.controls).forEach(el => {
                this.controls[el] = "";
            });
            this.controls[control] = "current";
        }
    }
    
});

const svg = document.querySelector("#canvas-div > svg:nth-child(1)");

svg.onmousedown = (ev) => {
    console.log(ev);
};

svg.onmouseup = (ev) => {
    app.cursor = null;
}