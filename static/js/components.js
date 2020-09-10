Vue.component("icon-button",{

    props: {
        color: String,
        size: {
            type: Number,
            default: 40
        },
        isLink: {
            type: Boolean,
            default: true
        },
        animate: {
            type: Boolean,
            default: true
        },
        widthValue: {
            type: String,
            default: null
        },
        heightValue: {
            type: String,
            default: null
        }
    },

    methods: {
        emitClickEvent(){
            if (this.isLink){
                this.$emit("button-clicked");
            }
        }
    },

    data(){
        return {
            
        }
    },

    computed: {
        buttonStyle: function(){
            return {
                backgroundColor: this.color,
                borderRadius: "5px",
                width: (this.widthValue===null) ? this.size+"px":this.widthValue,
                height: (this.heightValue===null) ? this.size+"px":this.heightValue,
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                cursor: (this.isLink) ? "pointer":"auto"
            }
        }
    },

    template: `
        <div v-bind:class="{'icon-button':isLink, pulse:animate}" v-bind:style="buttonStyle" v-on:click="emitClickEvent">
            <slot>

                <p style='color: #ffffff;'>btn</p>

            </slot>
        </div>
    `
});

Vue.component('nav-bar', {

    props: {
        theme: Object,
        buttonSize: Number
    },

    methods: {

    },

    data(){
        return {}
    },

    template: `
        <nav>
            <div>
                <icon-button
                    v-bind:is-link="false"
                    v-bind:animate="false"
                    v-bind:color="theme.Blue"
                    v-bind:size="buttonSize"> 
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14 4H16V6H19C20.6569 6 22 7.34315 22 9V15C22 16.6569 20.6569 18 19 18H16V20H14V4ZM16 8V16H19C19.5523 16 20 15.5523 20 15V9C20 8.44772 19.5523 8 19 8H16Z" fill="white"/>
                        <path d="M5 16H12V18H5C3.34315 18 2 16.6569 2 15V9C2 7.34315 3.34315 6 5 6H12V8H5C4.44772 8 4 8.44771 4 9V15C4 15.5523 4.44772 16 5 16Z" fill="white"/>
                    </svg>
                </icon-button>
                <a href="/" class="navtitle" v-bind:style="{color: theme.Text}">MinimalDesign</a>
            </div>
            <div>
                <slot name="center"></slot>
            </div>
            <div>
                <slot name="end"></slot>
            </div>
        </nav>
    `
});

Vue.component("design-card", {

    props:{
        source: String,
        theme: Object,
        buttonSize: Number,
        label: {
            type: String,
            default: "Title"
        }
    },

    methods: {

    },

    data(){
        return {
            innerStyle: {
                display: "flex",
                alignItems: "end",
                height: "100%",
                width: "100%"
            }
        };
    },

    computed: {
        style(){
            return {
                background: `url(${this.source})`,
                width: "32.3%",
                height: "30em",
                margin: "0.5em",
                borderRadius: "6px",
                backgroundSize: "cover",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"

            }
        },

        panelStyle(){
            return {
                backgroundColor: this.theme.Gray6, 
                width: '100%', 
                display: 'flex', 
                alignItems: 'center', 
                padding: '1em', 
                borderRadius: '0px 0px 2px 2px',
                boxShadow: "0px -5px 4px rgba(0, 0, 0, 0.25)"
            }
        },

        panelFontStyle(){
            return {
                color: this.theme.Text,
                width: "100%"
            }
        }
    },

    template: `
        <div class="design-card" v-bind:style="style">
            <div v-bind:style="innerStyle">

                <div v-bind:style="panelStyle">
                    <p v-bind:style="panelFontStyle">{{ label }}</p>

                    <icon-button
                        v-bind:style="{paddingLeft:'1em', paddingRight:'1em'}"
                        v-bind:color="theme.Blue"
                        v-bind:size="buttonSize"
                        v-bind:animate="false">

                        <p v-bind:style="{color:'#ffffff'}">Open</p>
                    </icon-button>
                </div>
            </div>
        </div>
    `
});

Vue.component('fab-button', {

    props: {
        color: String
    },

    methods: {

    },

    data(){
        return {}
    },

    computed: {
        style(){
            return {
                backgroundColor: this.color,
                borderRadius: "10em",
                paddingLeft: "0.6em",
                paddingRight: "0.6em",
                paddingTop: "0.2em",
                paddingBottom: "0.2em",
                position: "fixed",
                bottom: "3em",
                right: "3em",
                boxShadow: "0px 0px 14px rgba(0, 0, 0, 0.24)",
                display: "flex",
                alignItems: "center",
                cursor: "pointer"
            }
        }
    },

    template: `
        <div class="fab-button pulse" v-bind:style="style" v-on:click="$emit('button-clicked')">
            <slot></slot>
        </div>
    `
});

Vue.component('tool-bar', {

    props: {
        theme: Object,
        buttons: {
            type: Array,
            default(){
                return [];
            }
        }
    },

    methods: {},

    data(){
        return {
            style: {
                width: "100%",
                padding: "1.2em",
                display: "flex",
                justifyContent: "center",
                backgroundColor: this.theme.Gray6
            }
        }
    },

    computed: {
        outterStyle(){
            return {
                position: 'fixed',
                bottom: '0px',
                left: '0px',
                right: '0px',
                // backgroundColor: this.theme.Gray5,
                // boxShadow: "0px 0px 10px 3px rgba(76, 92, 96, 0.09)",
                // borderRadius: "20px 20px 0px 0px"
            }
        }
    },

    template: `
        <div v-bind:style="outterStyle">
            <div class="tool-bar" v-bind:style="style">
                <icon-button v-bind:color="'transparent'" v-bind:key="button.id" v-for="button in buttons">
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path v-bind:key="path.id" v-for="path in button.paths" d="path.path" v-bind:fill="theme.Text"/>
                    </svg>
                </icon-button>
            </div>
        </div>
    `
});