using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

public class PlayerSelectionMenu : MonoBehaviour
{
    public GameObject mapSelectionPanel;
    public GameObject playerSelectionPanel;
    public GameObject categorySelectionPanel;
    public GameObject ClassA_Panel;
    public GameObject ClassB_Panel;
    public GameObject ClassC_Panel;
    public GameObject ClassD_Panel;
    public GameObject ClassE_Panel;
    public GameObject ClassExtra_Panel;

    private string selectedMap;
    private int playerCount;
    private int currentPlayer = 1;

    void Start()
    {
        playerSelectionPanel.SetActive(false);
        categorySelectionPanel.SetActive(false);
        ClassA_Panel.SetActive(false);
        ClassB_Panel.SetActive(false);
        ClassC_Panel.SetActive(false);
        ClassD_Panel.SetActive(false);
        ClassE_Panel.SetActive(false);
        ClassExtra_Panel.SetActive(false);
    }

    public void SelectMap(string mapName)
    {
        selectedMap = mapName;
        PlayerPrefs.SetString("SelectedMap", selectedMap);
        mapSelectionPanel.SetActive(false);
        playerSelectionPanel.SetActive(true);
    }

    public void SetPlayerCount(int count)
    {
        playerCount = count;
        PlayerPrefs.SetInt("PlayerCount", playerCount);
        playerSelectionPanel.SetActive(false);
        categorySelectionPanel.SetActive(true);
    }

    public void SelectCategory(string category)
    {
        PlayerPrefs.SetString("SelectedCategory", category);
        categorySelectionPanel.SetActive(false);

        ClassA_Panel.SetActive(category == "A");
        ClassB_Panel.SetActive(category == "B");
        ClassC_Panel.SetActive(category == "C");
        ClassD_Panel.SetActive(category == "D");
        ClassE_Panel.SetActive(category == "E");
        ClassExtra_Panel.SetActive(category == "Extra");

        Debug.Log("Catégorie sélectionnée : " + category);
    }

public void SelectCar(string carName)
{
    PlayerPrefs.SetString($"SelectedCar{currentPlayer - 1}", carName);
    currentPlayer++;

    if (currentPlayer > playerCount)
    {
        SceneManager.LoadScene(selectedMap);
    }
    else
    {
        Debug.Log("Joueur " + currentPlayer + " doit choisir une voiture.");
    }
}
}