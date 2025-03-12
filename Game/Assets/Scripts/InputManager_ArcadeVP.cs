using UnityEngine;

namespace ArcadeVP
{
    public class InputManager_ArcadeVP : MonoBehaviour
    {
        public MiniRacersCarController CarController;

        private static int playerCount = 0;
        private int playerIndex;
        private string horizontalInput;
        private string verticalInput;
        private string jumpInput;

        private void Awake()
        {
            playerIndex = playerCount;
            playerCount++;
        }

        private void Start()
        {
            horizontalInput = $"P{playerIndex + 1}_Horizontal";
            verticalInput = $"P{playerIndex + 1}_Vertical";
            jumpInput = $"P{playerIndex + 1}_Jump";

            Debug.Log($"Joueur {playerIndex + 1} assigné - Inputs: {horizontalInput}, {verticalInput}");
        }

        private void OnDestroy()
        {
            playerCount = Mathf.Max(0, playerCount - 1);
        }

        private void Update()
        {
            float horizontal = Input.GetAxis(horizontalInput);
            float jump = Input.GetAxis(jumpInput);

            float r2Input = Input.GetAxis($"P{playerIndex + 1}_R2");
            float l2Input = Input.GetAxis($"P{playerIndex + 1}_L2");

            float keyboardAcceleration = 0f;
            float keyboardBrake = 0f;

            if (playerIndex == 0)
            {
                keyboardAcceleration = Input.GetKey(KeyCode.W) ? 1f : 0f;
                keyboardBrake = Input.GetKey(KeyCode.S) ? -1f : 0f;
                horizontal += Input.GetKey(KeyCode.A) ? -1f : 0f;
                horizontal += Input.GetKey(KeyCode.D) ? 1f : 0f;
            }
            else if (playerIndex == 1)
            {
                keyboardAcceleration = Input.GetKey(KeyCode.UpArrow) ? 1f : 0f;
                keyboardBrake = Input.GetKey(KeyCode.DownArrow) ? -1f : 0f;
                horizontal += Input.GetKey(KeyCode.LeftArrow) ? -1f : 0f;
                horizontal += Input.GetKey(KeyCode.RightArrow) ? 1f : 0f;
            }


            float vertical = r2Input - l2Input + keyboardAcceleration + keyboardBrake;

            float deadzone = 0.2f;
            if (Mathf.Abs(horizontal) < deadzone) horizontal = 0f;
            if (Mathf.Abs(vertical) < deadzone) vertical = 0f;

            horizontal = Mathf.Clamp(horizontal, -1f, 1f);
            vertical = Mathf.Clamp(vertical, -1f, 1f);

            CarController.ProvideInputs(horizontal, vertical, jump);
        }
    }
}
