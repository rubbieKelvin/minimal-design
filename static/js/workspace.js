class ControllerState{
    get Default(){
        return [
            {
                name: "rectangle",
                paths: [
                    {path:"M1 0C0.447716 0 0 0.447715 0 1V12C0 12.5523 0.447716 13 1 13H12C12.5523 13 13 12.5523 13 12V1C13 0.447715 12.5523 0 12 0H1ZM3 2C2.44772 2 2 2.44772 2 3V10C2 10.5523 2.44772 11 3 11H10C10.5523 11 11 10.5523 11 10V3C11 2.44772 10.5523 2 10 2H3Z"}
                ]
            }
        ]
    }
}

let controllerState = new ControllerState();

let app = new Vue({

    el: "#app",
    
    data(){
        return {
            theme: new Color(localStorage.getItem("theme")),
            buttonSize: 40,
            paper: null,
            controllerButtons: controllerState.Default
        }
    },

    // on created
    created(){
        this.paper = paper.setup(document.getElementById('canvas'));
    },

    computed: {
        canvasDivStyle(){
            return {
                width: "50%",
                height: "65%",
                backgroundColor: this.theme.BG,
                borderRadius: "5px",
                boxShadow: "0px 0px 4px 4px rgba(76, 92, 96, 0.1)",
            }
        }
    },
    
    methods: {

    }
    
});