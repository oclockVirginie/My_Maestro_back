import sequelize from "./database.js";
import {
    User,
    Projet,
    Company,
    Preview,
    Genre,
    MessageContact,
    Description
} from "../models/index.js";
import bcrypt from "bcryptjs";

try {
    await sequelize.sync({ force: true });
    // compagny
    await Company.create({
        name: "Entreprise 1",
        siret: "12345678912345",
        localisation: "Paris",
    });
    await Company.create({
        name: "Entreprise 2",
        siret: "22345678912345",
        localisation: "Lyon",
    });
    await Company.create({
        name: "Entreprise 3",
        siret: "32345678912345",
        localisation: "Nice",
    });
    await Company.create({
        name: "Entreprise 4",
        siret: "42345678912345",
        localisation: "Bordeaux",
    });
    


    await Preview.create({
        title: "Extrait 1",
        isStar: false,
        date: new Date("2025-01-01")
    }),
    await Preview.create({
        title: "Extrait 2",
        isStar: false,
        date: new Date("2025-03-03")
    }),
    await Preview.create({
        title: "Extrait 3",
        isStar: true,
        date: new Date("2025-05-05")
    }),
    // await Preview.create({
    //     title: "Extrait à supprimer",
    //     isStar: true,
    //     date: new Date("2025-06-06"),
    //     link: "uploads/RAYE - WHERE IS MY HUSBAND! (Official Music Video).mp3-1761222883667-884693652"
    // })

    // messages-contact
    await MessageContact.create({
        mail: "test1@test.com",
        message: "Maestro is magic",
    });
    await MessageContact.create({
        mail: "test2@test.com",
        message: "Maestro les meilleurs",
    });
    await MessageContact.create({
        mail: "test3@test.com",
        message: "Maestro all over teh world",
    });

    // user

    const passwordHashed1 = await bcrypt.hash("gargouille2026", 10);
    await User.create({
        email: "robin.syntaxe@exemple.com",
        password: passwordHashed1
    });

    const passwordHashed2 = await bcrypt.hash("gargouille2027", 10);
    await User.create({
        email: "camille.script@exemple.com",
        password: passwordHashed2
    });

    const passwordHashed3 = await bcrypt.hash("gargouille2028", 10);
    await User.create({
        email: "alex.flexbox@exemple.com",
        password: passwordHashed3
    });

    const passwordHashed4 = await bcrypt.hash("gargouille2029", 10);
    await User.create({
        email: "zoé.pixel@exemple.com",
        password: passwordHashed4
    });


    // Description-portfolio
    await Description.create({
        title: 'Title1',
        image_link: 'Image1',
        text: 'Text1'
    });
    await Description.create({
        title: 'Title2',
        image_link: 'Image2',
        text: 'Text1'
    });
    await Description.create({
        title: 'Title3',
        image_link: 'Image3',
        text: 'Text3'
    });


    await Genre.create({
        label: "classique"
    });
    await Genre.create({
        label: "rock"
    });
    await Genre.create({
        label: "jazz"
    });

    const users = await User.findAll();
    const companies = await Company.findAll();
    const genres = await Genre.findAll();
    const previews = await Preview.findAll();
  
    await companies[0].addListUsers([users[0]]);
    await companies[1].addListUsers([users[1]]);
  
    await previews[0].addListGenres([genres[0], genres[2]]);
    await previews[1].addListGenres([genres[1], genres[2]]);
    await previews[2].addListGenres([genres[0]]);

} catch (error) {
    console.error(error);
}
