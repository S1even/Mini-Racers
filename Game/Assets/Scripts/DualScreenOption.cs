using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;

public class DualScreenOption : MonoBehaviour
{
    public GameObject panelSelectCircuit;
    public GameObject panelSelectCategory;   
    public GameObject panelClassA;
    public GameObject panelClassB;
    public GameObject panelClassC;
    public GameObject panelClassD;
    public GameObject panelClassE;
    public GameObject panelClassExtra;
    public GameObject panelPlayers;
    
    private string selectedCircuit;
    private string selectedCar;

    void Start()
    {
        panelSelectCircuit.SetActive(false);
        panelSelectCategory.SetActive(false);
    }

    public void SelectCircuit(string circuitName)
    {
        selectedCircuit = circuitName;
    }

    public void GoToCategorySelection()
    {
        panelSelectCircuit.SetActive(false);
        panelSelectCategory.SetActive(true);
    }

    public void GoBackToPlayers()
    {
        panelSelectCategory.SetActive(false);
        panelPlayers.SetActive(true);
    }
    
    public void GoBackToCircuitSelection()
    {
        panelSelectCategory.SetActive(false);
        panelSelectCircuit.SetActive(true);
    }
    public void ShowCarPanel(GameObject carPanel)
    {
        panelSelectCategory.SetActive(false);
        carPanel.SetActive(true);
    }
    public void GoBackToCategorySelection()
    {
        panelSelectCategory.SetActive(true);
        panelClassA.SetActive(false);
        panelClassB.SetActive(false);
        panelClassC.SetActive(false);
        panelClassD.SetActive(false);
        panelClassE.SetActive(false);
        panelClassExtra.SetActive(false);
        
    }

    public void SelectCar(string carName)
    {
        selectedCar = carName;
        PlayerPrefs.SetString("SelectedCar", carName);
    }

    public void PlayGame()
    {
        if (!string.IsNullOrEmpty(selectedCircuit) && !string.IsNullOrEmpty(selectedCar))
        {
            PlayerPrefs.SetString("SelectedCircuit", selectedCircuit);
            SceneManager.LoadScene(selectedCircuit);
        }
    }
}