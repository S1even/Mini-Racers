using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;

public class LapTimeManager : MonoBehaviour
{
    public static int MinuteCount;
    public static int SecondCount;
    public static float MilliCount;
    public static string MilliDisplay;

    public GameObject MinuteBox;
    public GameObject SecondBox;
    public GameObject MilliBox;

    public static float RawTime;

    void Update()
    {
        MilliCount += Time.deltaTime * 10;
        MilliDisplay = MilliCount.ToString("F0");
        RawTime += Time.deltaTime;
        MilliBox.GetComponent<Text>().text = "" + MilliDisplay;

        if (MilliCount >= 10)
        {
            MilliCount = 0;
            SecondCount += 1;
        }
        
        if (SecondCount <= 9)
        {
            SecondBox.GetComponent<Text>().text = "0" + SecondCount + ".";
        }
        else
        {
            SecondBox.GetComponent<Text>().text = "" + SecondCount + ".";
        }

        if (SecondCount >= 60)
        {
            SecondCount = 0;
            MinuteCount += 1;
        }

        if (MinuteCount <= 9)
        {
            MinuteBox.GetComponent<Text>().text = "0" + MinuteCount + ".";
        }
        else
        {
            MinuteBox.GetComponent<Text>().text = "" + MinuteCount + ".";
        }
    }

    public void ResetTimer()
    {
        MinuteCount = 0;
        SecondCount = 0;
        MilliCount = 0;
        RawTime = 0;
        MilliDisplay = "0";

        // Mettre à jour les UI Text pour afficher 00:00.0
        MinuteBox.GetComponent<Text>().text = "00.";
        SecondBox.GetComponent<Text>().text = "00.";
        MilliBox.GetComponent<Text>().text = "0";
    }

    public void SaveLapTime()
    {
        string circuitID = SceneManager.GetActiveScene().name;

        int previousMin = PlayerPrefs.GetInt(circuitID + "_MinSave", int.MaxValue);
        int previousSec = PlayerPrefs.GetInt(circuitID + "_SecSave", int.MaxValue);
        float previousMilli = PlayerPrefs.GetFloat(circuitID + "_MilliSave", float.MaxValue);

        if (MinuteCount < previousMin || (MinuteCount == previousMin && SecondCount < previousSec) ||
            (MinuteCount == previousMin && SecondCount == previousSec && MilliCount < previousMilli))
        {
            PlayerPrefs.SetInt(circuitID + "_MinSave", MinuteCount);
            PlayerPrefs.SetInt(circuitID + "_SecSave", SecondCount);
            PlayerPrefs.SetFloat(circuitID + "_MilliSave", MilliCount);
        }
    }
}