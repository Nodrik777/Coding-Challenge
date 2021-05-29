let employee_info = [];

function onLoad() {

    getAllEmployees()
        .then(data => {
            console.log(data);
            for(let x in data) {
                let pic = data[x].employeehaspic === "1" ? `<img src="http://sandbox.bittsdevelopment.com/code1/employeepics/${data[x].employeeid}.jpg" alt="picture of ${data[x].employeefname} ${data[x].employeelname}" />` : ``;
                let featured = data[x].employeeisfeatured === "1" ?  `<div class="crown text--large">	
                👑</div>` : ``;

                let html_members=
                    `
                <div class="color--white">
                    <div class="project">
                        ${featured}
                        ${pic}
                        <h3 class="text--large">${data[x].employeefname} ${data[x].employeelname}</h3>
                        <div class="projects__text">${data[x].employeebio}</div>
                        <div class="container--inner">
                            ${data[x].roles.map((role) => `<div style="background-color: ${role.rolecolor}; color: #07090a; font-size: 2rem;">${role.rolename}</div>`
                    ).join('')}
                        </div>
                    </div>
                </div>
                `;
                employee_info.push(html_members);
            }
            let employee_grid = document.getElementById('employee_info');
            let output = employee_info.join(' ');
            employee_grid.innerHTML = output;
        });


}

// Defining async function
async function getAllEmployees() {
     // Storing response
    let response = await fetch("http://sandbox.bittsdevelopment.com/code1/fetchemployees.php", {
        method: "GET",

    });
    // Storing data in form of JSON
    let data = await response.json();
    return data;
}

window.addEventListener('load', onLoad);

