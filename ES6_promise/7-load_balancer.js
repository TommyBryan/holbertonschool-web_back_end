// 7-load_balancer.js

export default function loadBalancer(chinaDownload, USDownload) {
  // Return whichever promise resolves first
  return Promise.race([chinaDownload, USDownload]);
}
