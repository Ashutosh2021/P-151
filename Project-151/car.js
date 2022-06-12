AFRAME.registerComponent("car",{
    schema:{
        modelRef:{type:"string",default:"./car-model/scene.gltf"}
    },

    init: function(){
        
        this.el.setAttribute("gltf-model",this.data.modelRef)
        const position = { x: 0, y: 2, z: 0 };
        const rotation = { x: 0, y: -100, z: 0 };
        const scale = { x: 1, y: 1, z: 1 };
        this.el.setAttribute("position", position);
        this.el.setAttribute("rotation", rotation);
        this.el.setAttribute("scale",scale)
    }
})