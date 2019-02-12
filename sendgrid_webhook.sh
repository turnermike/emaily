function localtunnel {
  lt -s  ljksfnsdlkj --port 5000
}
until localtunnel; do
echo "localtunnel server crashed"
sleep 2
done