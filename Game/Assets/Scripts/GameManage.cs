using UnityEngine;

public class CarSpawner : MonoBehaviour
{
    public GameObject[] carPrefabs;
    private string selectedCar;
    public LapTimeManager lapTimeManager;

    void Start()
    {
        Application.targetFrameRate = 244;
        Time.timeScale = 1f;
        selectedCar = PlayerPrefs.GetString("SelectedCar", "");

        Transform spawnPoint = GameObject.FindWithTag("SpawnPoint").transform;

        foreach (GameObject car in carPrefabs)
        {
            if (car.name == selectedCar)
            {
                Instantiate(car, spawnPoint.position, spawnPoint.rotation);

                if (lapTimeManager != null)
                {
                    lapTimeManager.ResetTimer();
                }
                else
                {
                    Debug.LogWarning("LapTimeManager n'est pas assigné dans CarSpawner.");
                }

                break;
            }
        }
    }
}