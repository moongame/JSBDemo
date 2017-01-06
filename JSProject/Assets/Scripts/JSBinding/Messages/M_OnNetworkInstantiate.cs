// auto gen
using UnityEngine;
using UnityEngine.UI;
 
namespace jsb
{
    public class M_OnNetworkInstantiate : MonoBehaviour
    {
        public void OnNetworkInstantiate(NetworkMessageInfo info)
        {
            JSComponent[] coms = GetComponents<JSComponent>();
            if (coms == null || coms.Length == 0)
            {
                Destroy(this);
                return;
            }
             
            foreach (var com in coms)
            {
                com.RecvMsg("OnNetworkInstantiate", info);
            }
        }
    }
}