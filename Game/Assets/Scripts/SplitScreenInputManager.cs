using UnityEngine;

namespace ArcadeVP
{
    public class SplitScreenInputManager : MonoBehaviour
    {
        public MiniRacersCarController CarControl;
        public int playerIndex = 0;

        private string horizontalInput;
        private string verticalInput;
        private string jumpInput;

        private void Start()
        {
            horizontalInput = $"P{playerIndex + 1}_Horizontal";
            verticalInput = $"P{playerIndex + 1}_Vertical";
            jumpInput = $"P{playerIndex + 1}_Jump";
        }

        private void Update()
        {
            float horizontal = Input.GetAxis(horizontalInput);
            float vertical = Input.GetAxis(verticalInput);
            float jump = Input.GetAxis(jumpInput);

            CarControl.ProvideInputs(horizontal, vertical, jump);
        }
    }
}
