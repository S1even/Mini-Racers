using UnityEngine;
using ArcadeVP;

public class SplitScreenSpawner : MonoBehaviour
{
    public GameObject[] carPrefabs;
    public Transform[] spawnPoints;
    public GameObject cameraPrefab;

    void Start()
{
    Application.targetFrameRate = 244;
    int playerCount = PlayerPrefs.GetInt("PlayerCount", 1);
    Debug.Log($"[Spawner] Nombre de joueurs détectés : {playerCount}");

    for (int i = 0; i < playerCount; i++)
    {
        string selectedCarName = PlayerPrefs.GetString($"SelectedCar{i}", "");
        if (string.IsNullOrEmpty(selectedCarName))
        {
            Debug.LogWarning($"[Spawner] Aucun nom de voiture trouvé pour le joueur {i + 1}, attribution par défaut !");
            selectedCarName = carPrefabs[0].name;
        }

        Debug.Log($"[Spawner] Joueur {i + 1} a sélectionné : {selectedCarName}");

        GameObject selectedCarPrefab = FindCarPrefabByName(selectedCarName);

        if (selectedCarPrefab != null)
        {
            Transform spawnPoint = spawnPoints[i];
            GameObject spawnedCar = Instantiate(selectedCarPrefab, spawnPoint.position, spawnPoint.rotation);
            spawnedCar.name = $"Player{i + 1} ({selectedCarPrefab.name})";

            Debug.Log($"[Spawner] {spawnedCar.name} spawné en position {spawnPoint.position}");

            Camera existingCam = spawnedCar.GetComponentInChildren<Camera>();
            if (existingCam != null)
            {
                existingCam.gameObject.SetActive(false);
                Debug.Log($"[Spawner] Caméra désactivée sur {spawnedCar.name}");
            }

            GameObject newCam = Instantiate(cameraPrefab);
            Camera camComponent = newCam.GetComponent<Camera>();

            if (camComponent != null)
            {
                newCam.transform.SetParent(spawnedCar.transform);
                newCam.transform.localPosition = new Vector3(0, 2, -5);
                newCam.transform.localRotation = Quaternion.Euler(10, 0, 0);

                ConfigureCameraViewport(camComponent, i, playerCount);
                Debug.Log($"[Spawner] Caméra attachée à {spawnedCar.name} et viewport configuré.");
            }
            else
            {
                Debug.LogError($"[Spawner] Problème lors de la création de la caméra pour le joueur {i + 1}");
            }
        }
        else
        {
            Debug.LogError($"[Spawner] Aucun prefab trouvé pour {selectedCarName} !");
        }
    }
}

    private GameObject FindCarPrefabByName(string carName)
    {
        foreach (GameObject car in carPrefabs)
        {
            if (car.name == carName)
            {
                Debug.Log($"[Spawner] Voiture trouvée : {carName}");
                return car;
            }
        }
        Debug.LogError($"[Spawner] Aucun prefab correspondant à {carName} !");
        return null;
    }

    private void ConfigureCameraViewport(Camera cam, int playerIndex, int playerCount)
    {
        switch (playerCount)
        {
            case 1:
                cam.rect = new Rect(0, 0, 1, 1);
                break;
            case 2:
                cam.rect = new Rect(playerIndex * 0.5f, 0, 0.5f, 1);
                break;
            case 3:
                cam.rect = (playerIndex == 2) ? new Rect(0, 0, 1, 0.5f) :
                                                new Rect(playerIndex * 0.5f, 0.5f, 0.5f, 0.5f);
                break;
            case 4:
                cam.rect = new Rect((playerIndex % 2) * 0.5f, (playerIndex < 2 ? 0.5f : 0), 0.5f, 0.5f);
                break;
        }
        Debug.Log($"[Spawner] Viewport configuré pour Player {playerIndex + 1}: {cam.rect}");
    }
}