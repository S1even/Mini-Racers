using UnityEngine;

public class QuitGame : MonoBehaviour
{
    public void Quit()
    {
        Application.Quit();

        Debug.Log("Le jeu a été quitté.");
    }
}
