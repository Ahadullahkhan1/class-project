import logo from './images/dark-logo.svg';
import logo2 from './images/dark-logo.png';
import { Activity, AlertCircleIcon, AppWindow, Bookmark, Calendar, Cpu, DollarSign, DollarSignIcon, FileQuestion, Grid, Home, ListIcon, Mail, MailOpen, MessageSquare, Music, NotebookText, NotepadText, Phone, ShoppingCart, Star, UserCircle } from 'lucide-react';
import en from './images/icon-flag-en.svg'
import cn from './images/icon-flag-cn.svg'
import fr from './images/icon-flag-fr.svg'
import product1 from './images/product-1.jpg'
import product2 from './images/product-2.jpg'
import product3 from './images/product-3.jpg'
import ChatBc from './images/ChatBc.png'
import user1 from './images/user-2.jpg'
import user2 from './images/user-3.jpg'
import user3 from './images/user-4.jpg'
import user4 from './images/user-5.jpg'
import user5 from './images/user-6.jpg'
import user6 from './images/user-7.jpg'
import user7 from './images/user-8.jpg'
import user8 from './images/user-9.jpg'
import user9 from './images/user-11.jpg'


const contacts = [
    { id: 1, name: "Dr. Bonnie Barstow", avatar: user2 },
    { id: 2, name: "Jonathan Higgins", avatar: user3 },
    { id: 3, name: "Michael Knight", avatar: user4 },
    { id: 4, name: "Angus MacGyver", avatar: user6 },
    { id: 5, name: "Rick Wright", avatar: user7 },
    { id: 6, name: "Sledge Hammer", avatar: user8 },
    { id: 7, name: "Peter Thornton", avatar: user9 },
];


let Contact = [
    {
        icon: MailOpen,
        name: "All Contacts"
    }, {
        icon: Star,
        name: "Starred"
    }, {
        icon: NotepadText,
        name: "Pending"
    }, {
        icon: AlertCircleIcon,
        name: "Blocked"
    }
]
let Contact2 = [
    {
        icon: Bookmark,
        name: "Engineers"
    }, {
        icon: Bookmark,
        name: "Support Staff"
    }, {
        icon: Bookmark,
        name: "Sales Team"
    }
]
const notifications = [
    { id: 1, name: "Roman Joined the Team!", message: "Congratulate him", image: user1 },
    { id: 2, name: "New message", message: "Salma sent you a new message", image: user2 },
    { id: 3, name: "Bianca sent payment", message: "Check your earnings", image: user3 },
    { id: 4, name: "Jolly completed tasks", message: "Assign her new tasks", image: user3 },
    { id: 5, name: "John received payment", message: "$230 deducted from account", image: user4 },
    { id: 5, name: "John received payment", message: "$230 deducted from account", image: user5 },
];
const productsData = [
    { id: 1, name: "Supreme Toy Cooker", price: Math.floor(Math.random() * 200) + 100, image: product1 },
    { id: 2, name: "Kitchenware Item", price: Math.floor(Math.random() * 200) + 100, image: product2 },
    {
        id: 3,
        name: "Supreme Toy Cooker",
        price: Math.floor(Math.random() * 200) + 100,
        image: product3
    }
];
let images = {
    logo,
    logo2,
    ChatBc
}
let sideBar = [
    {
        icon: Home,
        label: "Modern"
    },
    {
        icon: ShoppingCart,
        label: "eCommerce"
    },
    {
        icon: DollarSign,
        label: "NFT"
    },
    {
        icon: Cpu,
        label: "Crypto"
    },
    {
        icon: Activity,
        label: "General"
    },
    {
        icon: Music,
        label: "Music"
    },
    {
        icon: Grid,
        label: "Frontend page"
    }
]
let sideBar2 = [
    {
        icon: Calendar,
        label: "Calendar"
    },
    {
        icon: MessageSquare,
        label: "Chat"
    },
    {
        icon: Mail,
        label: "Email"
    },
    {
        icon: NotebookText,
        label: "Notes"
    },
    {
        icon: Phone,
        label: "Phone"
    }, {
        icon: ListIcon,
        label: "Contact List"
    }, {
        icon: NotebookText,
        label: "Notes"
    }
]
let sideBar3 = [
    {
        icon: DollarSignIcon,
        label: "Pricing"
    }, {
        icon: FileQuestion,
        label: "FAQ"
    }, {
        icon: UserCircle,
        label: "Account Settings"
    }, {
        icon: AppWindow,
        label: "Landing Page"
    }
]
let topnav = [
    {
        title: "Apps"
    }, {
        title: "Chats"
    }
    , {
        title: "Calendar"
    }, {
        title: "Email"
    }
]
const languages = [
    { code: "en", name: "English (UK)", flag: en },
    { code: "cn", name: "中国人 (Chinese)", flag: cn },
    { code: "fr", name: "français (French)", flag: fr },
];


export { images, sideBar2, sideBar, sideBar3, topnav, languages, productsData, notifications, Contact, Contact2, contacts }