import React, { Component } from 'react';
import logo from './logo.svg';
import Fact from './Fact';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <header>
            <h1>Dinosaurs Are awesome!!!!</h1>
          </header>
          <div className="text">
              <p>This is a Velociraptor skeleton.</p>
          </div>
          <img src="http://artdinouveau.com/wp-content/uploads/2015/02/Velociraptor-Fossil-Dig.jpg" alt="Dinosour Picture" width="50%" height="25%" />
          <h1>Dino fact 1</h1>
          <h3>Dinosaurs went extinct 65 millon years ago.</h3>
          <h3>There is a theory dinosaurs were killed by weather change beacause a meteor hit Mexico. The dust covered the sky, therefore plants were dying herbivores were dying therefore, carnivores were dying therefore, ominvores were dying which killed all dinosaurs </h3>
          <img src="https://www.enchantedlearning.com/mgifs/Mesotimeline.GIF" alt ="timeline" style={{ width: '50%', height: '10%' }} />
          <h3>this is a time line  of the dinosaur times to now</h3>
          <Fact
            header="Dino fact 2"
          />
          <Fact
            header="Nicknamed hellboy (carnotaurus) becase it had devil like horns on its head and they had a hellish time digging it up"
            img={["https://allthatsinteresting.com/wordpress/wp-content/uploads/2016/05/canotaurus.jpg"]}
          />
          <Fact
            header="Dino fact 3"
            text="the first stegosaurs skeleton was found in colorado thats why it is they're state fossil"
            img={[`data:image/jpeg;base64,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`]}
          />
          <Fact
          header="Dino fact 4"
            text="spinosaurus was 10ft bigger than trex"
            img={[
                `data:image/jpeg;base64,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`
            ]}

          />
          <Fact
            header="Dino fact 5"
            text="trex has a modern relitive known as the chicken"
            img={[
                "https://allthatsinteresting.com/wordpress/wp-content/uploads/2016/05/rooster.jpg",
                "https://allthatsinteresting.com/wordpress/wp-content/uploads/2016/05/dinosaur-facts-t-rex.jpg"
            ]}
          />
          <Fact
            header="Dino fact 6"
            text="some people think the trex has the smallest arms they are wrong becase the carnotarus has the smallest"
            img={["https://allthatsinteresting.com/wordpress/wp-content/uploads/2016/05/canotaurus.jpg"]}
          />
          <Fact
              header="Dino fact 7"
              text="Argentinosaurus was the biggest herbivore  ever on the other hand the spinosaurus was the biggest carnivorous dinosaur ever"
              img={[
                  "https://allthatsinteresting.com/wordpress/wp-content/uploads/2016/05/argentinosaurus.jpg",
                  "https://allthatsinteresting.com/wordpress/wp-content/uploads/2016/05/spinosaurus.jpg"
              ]}
          />

          <Fact
              header="Dino fact 8"
              text="sauropod dinos (long necks) had rock like stuff in its stomch to break its food down"
              img={["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGF_65C6E2yYaWJWHFoJXIoFPxtAlOkvpghDkyZX5ZSqZpbkWs_w"]}
          />

          <Fact
            header="Dino fact 9"
            text="the famous Velociraptor is not big as it is in the movies also it was a utah raptor"
            img={["https://allthatsinteresting.com/wordpress/wp-content/uploads/2016/05/raptor.jpg"]}
          />

          <Fact
            header="Dino fact 10"
            text="Most carnivores had hollow bones"
            img={["https://allthatsinteresting.com/wordpress/wp-content/uploads/2016/05/hollow.jpg"]}
          />

          <Fact
            header="Dino fact 11"
            text="One of the most stunning fossils ever discovered is  named “Fighting Dinosaurs.” It is a Protoceratops  in battle with a Velociraptor the epic struggle was more than likely cut short when a sand dune collapsed on the two fighting dinosaurs, freezing them in time."
            img={["https://allthatsinteresting.com/wordpress/wp-content/uploads/2016/05/fight.jpg"]}
          />

          <Fact
            header="Dino fact 12"
            text="The first dinosaur bones ever discovered belonged to Megalosaurus"
            img={["https://allthatsinteresting.com/wordpress/wp-content/uploads/2016/05/megalosaurus.jpg"]}
          />

          <Fact
            header="Dino fact 13"
            text="While dinosaurs walked the Earth, pterosaurs inhabited the air and plesiosaurs inhabited the water. This means that the well-known flying Pterodactyl (above) and swimming Liopleurodon aren't technically considered dinosaurs."
            img={["https://allthatsinteresting.com/wordpress/wp-content/uploads/2016/05/winged-skeletons.jpg"]}
          />

          <Fact
            header="Dino fact 14"
            text="Scientists estimate, based on bone evidence, that some dinosaurs could have lived to be between 75 and 300 millon years ago."
            img={["https://www.enchantedlearning.com/mgifs/Mesotimeline.GIF"]}
/>
          <Fact
            header="Dino fact 15"
            text="the stegosaurs had veins in its plates so the plates were for heating and cooling much like the spinosaurus's spine"
            img={["https://allthatsinteresting.com/wordpress/wp-content/uploads/2016/05/plates.jpg"]}
          />
          <Fact
          header="Dino fact 16"
          text="an  Ankylosaurus was fortified enough to smash a trex's ankles"
          img={["https://media-cdn.tripadvisor.com/media/photo-s/04/77/ea/bb/jura-park.jpg"]}
          />

          <Fact
          header="Dino fact 17"
          text="Scientifically speaking, there is no such thing as the  Brontosaurus its misidentification , in which two paleontologists competed in discovering the most dinosaurs. Its true name is the Apatosaurus."
          img={["https://allthatsinteresting.com/wordpress/wp-content/uploads/2016/05/apatosaurus.jpg"]}
          />
          <Fact
          header="Dino fact 18"
          text="Many dinosaurs, like the massive predator know as Cryolophosaurus were so equipped for the cold that they were able to live in Antarctica."
          img={["https://allthatsinteresting.com/wordpress/wp-content/uploads/2016/05/cryolophosaurus.jpg"]}
          />
          <Fact
          header="Dino fact 19"
          text="
Dinosaurs’ long tails existed in order to help them keep their balance while running"
          img={["https://allthatsinteresting.com/wordpress/wp-content/uploads/2016/05/running.jpg"]}
          />
          <Fact
          header="Dino fact 20"
          text="Many dinosaur eggs could grow to be as large as basketballs"
          img={["https://allthatsinteresting.com/wordpress/wp-content/uploads/2016/05/eggs.jpg"]}
          />
          <fact
          header="Dino fact 21"
          text="the Hadrosaur could have over 1,000 teeth at once and was able to grow new ones  "
          img={["https://allthatsinteresting.com/wordpress/wp-content/uploads/2016/05/hadrosaur.jpg"]}
          />
          <Fact
          header="Dino fact 22"
          text="The extraordinary length of the dinosaurs' reign can be difficult to comprehend. In fact, the gap between when Stegosaurus lived and when T. rex lived is greater than the gap between the trex and you."
          img={["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUY5goyEv3oJgwSngMIBqA59Bbl0CX0b-oRH61ZeLIKZrC04lZ9A"]}
          />
          <a href="https://allthatsinteresting.com/dinosaur-facts-names-and-photos">All facts here</a>
<p>my youtube channel </p>
<a href="https://www.youtube.com/channel/UCgpihc1LD5WYuO6G7iDYBDw?view_as=subscriber">My youtube channel</a>
      </div>
    );
  }
}

export default App;
