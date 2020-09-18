const data = [
    {
        name: 'Srinivas',
        age: 21,
        city: 'Rajahmundry',
        height: 6
    },
    {
        name: 'Lalith',
        age: 22,
        city: 'Hyderabad',
        height : 5.12
    },
    {
        name: 'Reddy',
        age: 23,
        city: 'Vijayawada',
        height: 5.11
    }
]

function display(array){
    let tabledata = "";
    
    array.forEach( (data, index) => {
        let currentdata = `<tr>
                        <td>${index+1}</td>
                        <td>${data.name}</td>
                        <td>${data.age}</td>
                        <td>${data.city}</td>
                        <td>${data.height}</td>
                        <td>
                            <button onclick='deletedata(${index})'>Delete</button>
                        </td>
                    </tr>`;
        tabledata += currentdata;
    
    });


    document.getElementById('tablebody').innerHTML = tabledata;
}

display(data);

function search(){

    let search = document.getElementById('searchname').value;
    
    let searchname = data.filter( (data) => {
        return(
            data.name.toUpperCase().indexOf(search.toUpperCase()) != -1
        )
    });

    display(searchname);
}

function deletedata(index){
    data.splice(index,1);
    display(data);
}