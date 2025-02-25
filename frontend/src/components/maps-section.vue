<template>
    <div class="MapsSection">
        <div class="circuit">
            <div class="section-maps">
                <img src="../assets/circuits/SpeedMontain.PNG" alt="Speed Montain">
                <div class="section-text-maps">
                    <h3>Speed Montain</h3>
                    <p>fzhugreagreagreaghrneahgrueqbgh rebaugbre ahgureb aghurebh bghrueabg brbhehugrhuqebh gbrhubshgrhebhg b rheuqh ghuqbg lb rhbuqe glrbq lghburbqh gbu qlbgburqh lguhrbqhgbuhrbhq gbu qbgrquhgb qgbfbgufbdlq ghbufdq gbufdbl gfbds gfdusbg fdbsg fdshgfsdguhfhdshugfhdsughfbhdsbguhfbhsdguhfbdshbgufsdghfmds bfdqhuugbfqhgbfhshugbfdshgbfdshugufbdhsghfshgbfhds ghifsghfdsjgifdsgfdis</p>
                </div>
            </div>
        </div>
        <div class="circuit reverse">
            <div class="section-maps reverse">
                <img src="../assets/circuits/SpeedMontain.PNG" alt="Speed Montain">
                <div class="section-text-maps">
                    <h3>Speed Montain</h3>
                    <p>fzhugreagreagreaghrneahgrueqbgh rebaugbre ahgureb aghurebh bghrueabg brbhehugrhuqebh gbrhubshgrhebhg b rheuqh ghuqbg lb rhbuqe glrbq lghburbqh gbu qlbgburqh lguhrbqhgbuhrbhq gbu qbgrquhgb qgbfbgufbdlq ghbufdq gbufdbl gfbds gfdusbg fdbsg fdshgfsdguhfhdshugfhdsughfbhdsbguhfbhsdguhfbdshbgufsdghfmds bfdqhuugbfqhgbfhshugbfdshgbfdshugufbdhsghfshgbfhds ghifsghfdsjgifdsgfdis</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style>
.MapsSection {
  font-family: Arial, sans-serif;
  text-align: center;
}

.circuit {
  height: 300px;
  padding: 20px;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d67d91;
}

.circuit.reverse {
    background-color: #3A3B6F;
}

.section-maps {
    display: flex;
    width: 80%;
    align-items: center;
    gap: 20px;
}

.section-maps.reverse {
    flex-direction: row-reverse;
}

.circuit img {
    width: 300px;
    height: 200px;
    object-fit: cover;
    border: none;
    border-radius: 15px;
    border: 2px solid white;
}

.section-text-maps {
    flex: 1;
    text-align: left;
    word-wrap: break-word;
    overflow-wrap: break-word;
    padding: 0 10px;
}

@media (max-width: 768px) {
    .section-maps {
        flex-direction: column !important;
        text-align: center;
        padding: 0 20px;
    }
    .circuit {
        height: 500px;
    }
    .section-text-maps {
        padding: 0 20px;
        text-align: center;
    }
    .MapsSection p {
        width: 300px;
    }
}
</style>