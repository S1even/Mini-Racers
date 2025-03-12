using UnityEngine;

public class SplitScreenManager : MonoBehaviour
{
    public Camera[] playerCameras;

    public void Start()
    {
        int playerCount = playerCameras.Length;
        
        for (int i = 0; i < playerCount; i++)
        {
            if (playerCameras[i] != null)
            {
                ConfigureViewport(playerCameras[i], i, playerCount);
            }
        }
    }

    private void ConfigureViewport(Camera cam, int playerIndex, int playerCount)
    {
        switch (playerCount)
        {
            case 1:
                cam.rect = new Rect(0, 0, 1, 1);
                break;
            case 2:
                cam.rect = new Rect(playerIndex == 0 ? 0 : 0.5f, 0, 0.5f, 1);
                break;
            case 3:
                if (playerIndex == 0)
                    cam.rect = new Rect(0, 0.5f, 0.5f, 0.5f);
                else if (playerIndex == 1)
                    cam.rect = new Rect(0.5f, 0.5f, 0.5f, 0.5f);
                else
                    cam.rect = new Rect(0, 0, 1, 0.5f);
                break;
            case 4:
                if (playerIndex == 0)
                    cam.rect = new Rect(0, 0.5f, 0.5f, 0.5f);
                else if (playerIndex == 1)
                    cam.rect = new Rect(0.5f, 0.5f, 0.5f, 0.5f);
                else if (playerIndex == 2)
                    cam.rect = new Rect(0, 0, 0.5f, 0.5f);
                else
                    cam.rect = new Rect(0.5f, 0, 0.5f, 0.5f);
                break;
        }
    }
}
