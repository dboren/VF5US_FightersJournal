const { Character } = require('../models');

const characterdata = [
    
    {
        name: "Akira Yuki",
        fighting_style: "Bajiquan (aka Hakkyoku-ken)",
        weight_class: "Heavy Middle",
        portrait: "..assets/images/portraits/akira-hdr.jpg",
        country: "Japan",
    },
    {
        name: "Aoi Umenokoji",
        fighting_style: "Aiki-jujutsu",
        weight_class: "Light",
        portrait: "..assets/images/portraits/aoi-hdr.jpg",
        country: "Japan",
    },
    {
        name: "Brad Burns",
        fighting_style: "Muay Thai",
        weight_class: "Middle",
        portrait: "..assets/images/portraits/brad-hdr.jpg",
        country: "Italy",
    },
    {
        name: "Eileen",
        fighting_style: "Monkey-Style Kung Fu (aka Kou-ken)",
        weight_class: "Super Light",
        portrait: "../assets/images/portraits/eileen-hdr.jpg",
        country: "China",
    },
    {
        name: "El Blaze",
        fighting_style: "Lucha Libre",
        weight_class: "Super Light",
        portrait: "../assets/images/portraits/elblaze-hdr.jpg",
        country: "Mexico",
    },
    {
        name: "Goh Hinogami",
        fighting_style: "Judo",
        weight_class: "Middle",
        portrait: "../assets/images/portraits/goh-hdr.jpg",
        country: "Japan",
    },
    {
        name: "Jacky Bryant",
        fighting_style: "Jeet Kune Do",
        weight_class: "Heavy Middle",
        portrait: "../assets/images/portraits/jacky-hdr.jpg",
        country: "USA",
    },
    {
        name: "Jean Kujo",
        fighting_style: "Karate",
        weight_class: "Heavy Middle",
        portrait: "../assets/images/portraits/jean-hdr.jpg",
        country: "France",
    },
    {
        name: "Jeffry McWild",
        fighting_style: "Pancratium",
        weight_class: "Heavy",
        portrait: "../assets/images/portraits.jeffry-hdr.jpg",
        country: "Australia",
    },
    {
        name: "Kage-Maru",
        fighting_style: "Hagakure-ryu Ju-Jutsu",
        weight_class: "Middle",
        portrait: "../assets/images/portraits/kage-hdr.jpg",
        country: "Japan",
    },
    {
        name: "Lau Chan",
        fighting_style: "Tiger Swallow Fist (aka Koen-ken)",
        weight_class: "Middle",
        portrait: "../assets/images/portraits/lau-hdr.jpg",
        country: "China",
    },
    {
        name: "Lei-Fei",
        fighting_style: "Shaolin Kung Fu",
        weight_class: "Middle",
        portrait: "../assets/images/portraits/lei-hdr.jpg",
        country: "China",
    },
    {
        name: "Lion Rafale",
        fighting_style: "Northern Praying Mantis (aka Tourou-ken)",
        weight_class: "Light",
        portrait: "../assets/images/portraits/lion-hdr.jpg",
        country: "France",
    },
    {
        name: "Pai Chan",
        fighting_style: "Mizongquan (aka Ensei-ken)",
        weight_class: "Light",
        portrait: "../assets/images/portraits/pai-hdr.jpg",
        country: "China",
    },
    {
        name: "Sarah Bryant",
        fighting_style: "Hybrid Martial Arts",
        weight_class: "Light",
        portrait: "../assets/images/portraits/sarah-hdr.jpg",
        country: "USA",
    },
    {
        name: "Shun Di",
        fighting_style: "Drunken Kung Fu (aka Zui Quan)",
        weight_class: "Light",
        portrait: "../assets/images/portraits/shun-hdr.jpg",
        country: "China",
    },
    {
        name: "Taka-Arashi",
        fighting_style: "Sumo",
        weight_class: "Super Heavy",
        portrait: "../assets/images/portraits/taka-hdr.jpg",
        country: "Japan",
    },
    {
        name: "Vanessa Lewis",
        fighting_style: "Vale Tudo",
        weight_class: "Light",
        portrait: "../assets/images/portraits/vanessa-hdr.jpg",
        country: "USA"
    },
    {
        name: "Wolf Hawkfield",
        fighting_style: "Pro Wrestling",
        weight_class: "Heavy",
        portrait: "../assets/images/portraits/wolf-hdr.jpg",
        country: "Canada",
    },
];

const seedCharacters = () => Character.bulkCreate(characterdata);

module.exports = seedCharacters;