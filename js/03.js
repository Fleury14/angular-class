// jshint esversion: 6

const exampleObj1 = [
    {
        name: 'Ryu',
        origin: 'Japan',
        style: 'Zoning'
    },
    {
        name: 'Ken',
        origin: 'USA',
        style: 'Rushdown'
    },
    {
        name: 'Guile',
        origin: 'USA',
        style: 'Zoning'
    },
    {
        name: 'Sagat',
        origin: 'Thailand',
        style: 'Zoning'
    },
    {
        name: 'Laura',
        origin: 'Brazil',
        style: 'Grappler'
    },
];

function setExample() {
    document.getElementById('example1').innerHTML = JSON.stringify(exampleObj1);
}

window.onload = setExample;