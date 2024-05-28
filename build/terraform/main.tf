terraform {
  backend "gcs" {
    bucket = "ehint-terraform-state"
    prefix = "terraform/state"
    region = "southamerica-east1"
  }
}

resource "google_storage_bucket" "ehint-static" {
    name          = "ehint-static-bucket"
    location      = "southamerica-east1"
    storage_class = "standard"
}
