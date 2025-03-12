using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;

public class LapComplete : MonoBehaviour
{
    public GameObject LapCompleteTrig;
    public GameObject HalfLapTrig;
    public GameObject MinuteDisplay;
    public GameObject SecondDisplay;
    public GameObject MilliDisplay;
    public GameObject LapTimeBox;
    public GameObject LapCounter;
    public GameObject LapRequirement;
    public int LapsDone;
    public int LaspsDoneMax = 0;
    public float RawTime;

    private string circuitID;

    void Start()
    {
        circuitID = SceneManager.GetActiveScene().name;
        LapRequirement.GetComponent<Text>().text = "/ " + LaspsDoneMax;
    }

    void Update()
    {

    }

    void OnTriggerEnter()
    {
        LapsDone += 1;
        LapCounter.GetComponent<Text>().text = "" + LapsDone;
        RawTime = PlayerPrefs.GetFloat(circuitID + "_RawTime");
        if (LapTimeManager.RawTime <= RawTime || RawTime == 0)
        {
            if (LapTimeManager.SecondCount <= 9)
            {
                SecondDisplay.GetComponent<Text>().text = "0" + LapTimeManager.SecondCount + ".";
            }
            else
            {
                SecondDisplay.GetComponent<Text>().text = "" + LapTimeManager.SecondCount + ".";
            }

            if (LapTimeManager.MinuteCount <= 9)
            {
                MinuteDisplay.GetComponent<Text>().text = "0" + LapTimeManager.MinuteCount + ".";
            }
            else
            {
                MinuteDisplay.GetComponent<Text>().text = "" + LapTimeManager.MinuteCount + ".";
            }

            MilliDisplay.GetComponent<Text>().text = "" + LapTimeManager.MilliCount + ".";

            PlayerPrefs.SetInt(circuitID + "_MinSave", LapTimeManager.MinuteCount);
            PlayerPrefs.SetInt(circuitID + "_SecSave", LapTimeManager.SecondCount);
            PlayerPrefs.SetFloat(circuitID + "_MilliSave", LapTimeManager.MilliCount);
            PlayerPrefs.SetFloat(circuitID + "_RawTime", LapTimeManager.RawTime);
        }

        LapTimeManager.MinuteCount = 0;
        LapTimeManager.SecondCount = 0;
        LapTimeManager.MilliCount = 0;
        LapTimeManager.RawTime = 0;

        HalfLapTrig.SetActive(true);
        LapCompleteTrig.SetActive(false);
    }
}
