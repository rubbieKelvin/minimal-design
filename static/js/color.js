class Color {
    constructor (theme){
        this.theme = (theme === undefined || theme === null) ? "light":theme;
    }
    
    get LIGHT () {
        return (this.theme === "light")
    }

    get Bg(){
        return this.LIGHT ? "#ffffff" : "#292929";
    }

    get Red(){
        return this.LIGHT ? "#FF3B30" : "#FF453A";
    }

    get Orange(){
        return this.LIGHT ? "#FF9500" : "#FF9F0A";
    }

    get Yellow(){
        return this.LIGHT ? "#FFCC00" : "#FFD60A";
    }

    get Green(){
        return this.LIGHT ? "#34C759" : "#32D74B";
    }

    get Sky(){
        return this.LIGHT ? "#5AC8FA" : "#64D2FF";
    }

    get Blue(){
        return this.LIGHT ? "#007AFF" : "#0A84FF";
    }

    get Indigo(){
        return this.LIGHT ? "#5856D6" : "#5E5CE6";
    }

    get Pirple(){
        return this.LIGHT ? "#AF52DE" : "#BF5AF2";
    }

    get Pink(){
        return this.LIGHT ? "#FF2D55" : "#FF2D55";
    }

    get Gray1(){
        return this.LIGHT ? "#8E8E93" : "#8E8E93";
    }

    get Gray2(){
        return this.LIGHT ? "#AEAEB2" : "#636366";
    }

    get Gray3(){
        return this.LIGHT ? "#C7C7CC" : "#48484A";
    }

    get Gray4(){
        return this.LIGHT ? "#D1D1D6" : "#3A3A3C";
    }

    get Gray5(){
        return this.LIGHT ? "#E5E5EA" : "#2C2C2E";
    }

    get Gray6(){
        return this.LIGHT ? "#F2F2F7" : "#1C1C1E";
    }

    get Text(){
        return this.LIGHT ? "#333333" : "#ffffff";
    }

    toString(){
        return this.theme;
    }

    toJSON(){
        return {
            Bg: this.LIGHT ? "#ffffff" : "#292929",
            Red: this.LIGHT ? "#FF3B30" : "#FF453A",
            Orange: this.LIGHT ? "#FF9500" : "#FF9F0A",
            Yellow: this.LIGHT ? "#FFCC00" : "#FFD60A",
            Green: this.LIGHT ? "#34C759" : "#32D74B",
            Sky: this.LIGHT ? "#5AC8FA" : "#64D2FF",
            Blue: this.LIGHT ? "#007AFF" : "#0A84FF",
            Indigo: this.LIGHT ? "#5856D6" : "#5E5CE6",
            Pirple: this.LIGHT ? "#AF52DE" : "#BF5AF2",
            Pink: this.LIGHT ? "#FF2D55" : "#FF2D55",
            Gray1: this.LIGHT ? "#8E8E93" : "#8E8E93",
            Gray2: this.LIGHT ? "#AEAEB2" : "#636366",
            Gray3: this.LIGHT ? "#C7C7CC" : "#48484A",
            Gray4: this.LIGHT ? "#D1D1D6" : "#3A3A3C",
            Gray5: this.LIGHT ? "#E5E5EA" : "#2C2C2E",
            Gray6: this.LIGHT ? "#F2F2F7" : "#1C1C1E",
            Text: this.LIGHT ? "#333333" : "#ffffff"
        }

    }

    getColor(color){
        return this.toJSON()[color];
    }
}