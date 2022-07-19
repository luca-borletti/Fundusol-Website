window.onload = function() {
    var path = document.getElementById('projects_path');
    var length = path.getTotalLength(path);
    console.log(length);

    function returnTools() {
        pencil1.classList.remove("pencil_1_active");
        pencil2.classList.remove("pencil_2_active");
        blueprint.classList.remove("blueprint_active");
        hammer.classList.remove("hammer_active");
        wrench.classList.remove("wrench_active");
        
        schoolPath.classList.remove("school_path_active");
        schoolPath.classList.add("school_path_inactive");

        workPath.classList.remove("work_path_active");
        workPath.classList.add("work_path_inactive");

        projectsPath.classList.remove("projects_path_active");
        projectsPath.classList.add("projects_path_inactive");
        
        projectsText.classList.add("projects_text_inactive");
        workText.classList.add("work_text_inactive");
        schoolText.classList.add("school_text_inactive");
    }

    var hovering = false;
    
    const toolbelt = document.getElementById('toolbelt');
    
    const gPencils = document.getElementById('g_pencils');
    const pencil1 = document.getElementById('g_pencil_1');
    const pencil2 = document.getElementById('g_pencil_2');
    
    const blueprint = document.getElementById('g_bp');
    
    const hammer = document.getElementById('g_hammer');
    
    const wrench = document.getElementById('g_wrench');

    const schoolPath = document.getElementById('school_path');
    const workPath = document.getElementById('work_path');
    const projectsPath = document.getElementById('projects_path');
    const projectsText = document.getElementById('projects_text');
    const schoolText = document.getElementById('school_text');
    const workText = document.getElementById('work_text');
    const gProjects = document.getElementById('g_projects');
    const gSchool = document.getElementById('g_school');
    const gWork = document.getElementById('g_work');

    // returnTools();
    // projectsText.style.display = "none";
    // workText.style.display = "none";
    // schoolText.style.display = "none";


    gPencils.addEventListener("mouseover", () => {
        returnTools();
        gSchool.style.display = "unset";
        pencil1.classList.add("pencil_1_active");
        pencil2.classList.add("pencil_2_active");
        
        schoolPath.classList.remove("school_path_inactive");
        schoolPath.classList.add("school_path_active");

        schoolText.classList.remove("school_text_inactive");
    });

    blueprint.addEventListener("mouseover", () => {
        returnTools();
        gProjects.style.display = "unset";

        blueprint.classList.add("blueprint_active");
        
        projectsPath.classList.remove("projects_path_inactive");
        projectsPath.classList.add("projects_path_active");

        projectsText.classList.remove("projects_text_inactive");

    });

    wrench.addEventListener("mouseover", () => {
        returnTools();
        gWork.style.display = "unset";

        hammer.classList.add("hammer_active");
        wrench.classList.add("wrench_active");
        
        workPath.classList.remove("work_path_inactive");
        workPath.classList.add("work_path_active");
        
        workText.classList.remove("work_text_inactive");

    });

    hammer.addEventListener("mouseover", () => {
        returnTools();
        gWork.style.display = "unset";
        
        hammer.classList.add("hammer_active");
        wrench.classList.add("wrench_active");
        
        workPath.classList.remove("work_path_inactive");
        workPath.classList.add("work_path_active");

        workText.classList.remove("work_text_inactive");

    });

    // toolbelt.addEventListener("mouseout", () => {
    //     setTimeout(function() {
    //         pencil1.classList.remove("pencil_1_active");
    //         pencil2.classList.remove("pencil_2_active");
    //         blueprint.classList.remove("blueprint_active");
    //         hammer.classList.remove("hammer_active");
    //         wrench.classList.remove("wrench_active");
    //     }, 3000);
    // });

    // gPencils.addEventListener("mouseover", () => {
    //     if (!hovering) {
    //         hovering = true;
    //         pencil1.classList.add("pencil_1_active");
    //         pencil2.classList.add("pencil_2_active");
    //     }
    // });
    // gPencils.addEventListener("mouseout", () => {
    //     setTimeout(function() {
    //         hovering = false;
    //         pencil1.classList.remove("pencil_1_active");
    //         pencil2.classList.remove("pencil_2_active");
    //     }, 1000);
    // });

    // blueprint.addEventListener("mouseover", () => {
    //     if (!hovering) {
    //         hovering = true;
    //         blueprint.classList.add("blueprint_active");
    //     }
    // });
    // blueprint.addEventListener("mouseout", () => {
    //     setTimeout(function() {
    //         hovering = false;
    //         blueprint.classList.remove("blueprint_active");
    //     }, 1000);
    // });


}



// const path = document.getElementById('path_pencil_1');

// const circle = document.getElementById('g_pencil_1');

// const val = { distance: 0 };

// const xShift = path.getPointAtLength(0).x;

// const yShift = path.getPointAtLength(0).y;

// console.log("success");

// circle.setAttribute('transform', "translate(0,0)");
// translate(171.853 318.93)
// gsap.to(val, {
//     // Animate from distance 0 to the total distance
//     distance: path.getTotalLength(),
//     // Loop the animation
//     repeat: -1,
//     // Make the animation lasts 5 seconds
//     duration: 10,
//     // Function call on each frame of the animation
//     onUpdate: () => {
//       // Query a point at the new distance value
//       const point = path.getPointAtLength(val.distance);
//       // Update the circle coordinates
//     //   console.log(point.x);
//     //   console.log(point.y);
//       var attValue = "translate(" + (point.x - xShift + 171.853) + "," + (point.y - yShift + 318.93) + ")";
//       circle.setAttribute('transform', attValue);
//     //   circle.setAttribute('transform', point.y);
//     }
//   });

// gsap.to(val, {
//     // Animate from distance 0 to the total distance
//     distance: path.getTotalLength(),
//     // Loop the animation
//     repeat: -1,
//     // Make the animation lasts 5 seconds
//     duration: 10,
//     // Function call on each frame of the animation
//     onUpdate: () => {
//       // Query a point at the new distance value
//       const point = path.getPointAtLength(path.getTotalLength() - val.distance);
//       // Update the circle coordinates
//     //   console.log(point.x);
//     //   console.log(point.y);
//       var attValue = "translate(" + (point.x - xShift + 171.853) + "," + (point.y - yShift + 318.93) + ")";
//       circle.setAttribute('transform', attValue);
//     //   circle.setAttribute('transform', point.y);
//     }
//   });