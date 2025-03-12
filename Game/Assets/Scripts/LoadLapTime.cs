using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;

public class LoadLapTime : MonoBehaviour
{
    public int MinCount;
    public int SecCount;
    public float MilliCount;

    public GameObject MinDisplay;
    public GameObject SecDisplay;
    public GameObject MilliDisplay;

    private string circuitID;
    void Start()
    {
        circuitID = SceneManager.GetActiveScene().name;
        MinCount = PlayerPrefs.GetInt(circuitID + "_MinSave");
        SecCount = PlayerPrefs.GetInt(circuitID + "_SecSave");
        MilliCount = PlayerPrefs.GetFloat(circuitID + "_MilliSave");

        MinDisplay.GetComponent<Text>().text = "" + MinCount + ":";
        SecDisplay.GetComponent<Text>().text = "" + SecCount + ".";
        MilliDisplay.GetComponent<Text>().text = "" + MilliCount;
    }
}